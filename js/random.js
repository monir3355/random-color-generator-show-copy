function generatorColor() {
  const random1 = (Math.round(Math.random() * 255)).toString(16);
  const random2 = (Math.round(Math.random() * 255)).toString(16);
  const random3 = (Math.round(Math.random() * 255)).toString(16);
  return `#${random1}${random2}${random3}`;
};

