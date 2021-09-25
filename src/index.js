import { Engine } from 'matter-js';

window.canvas = document.querySelector('#canvas');
window.c = canvas.getContext('2d');
window.engine = Engine.create();

const update = () => {
  bg('white');

  Engine.update(engine, 1000 / 60);
  requestAnimationFrame(update);
};

const bg = (colour) => {
  c.save();
  c.fillStyle = colour;
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.restore();
};

update();
