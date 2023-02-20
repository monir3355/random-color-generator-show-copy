let div = null;

window.onclick = () => {
  main();
}

function main() {
  const myBody = document.getElementById('myBody');
  const generatorBtn = document.getElementById('generate-btn');
  const copyBtn = document.getElementById('copy-btn');
  const inputField = document.getElementById('input-field');
  const msg = inputField.value;
  const randomColor = generatorColor();
  // click btn and change color
  generatorBtn.addEventListener('click', function(){
    myBody.style.backgroundColor = randomColor;
    inputField.value = randomColor;
  });
  // Copy the color code from this 
  copyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(msg);
    if(div !== null) {
      div.remove();
      div = null;
    }
    generateMsg(`${msg} Copied`);
  });

  

  function generateMsg(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'copy-text toast-msg-in';
    document.body.appendChild(div);
    div.addEventListener('click', function(){
      div.classList.remove('toast-msg-in');
      div.classList.add('toast-msg-out');
      div.addEventListener('animationend', function(){
        div.remove();
        div = null;
      });
    });
  };
}
