const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let particles = [];

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 5;
    this.speedX = Math.random() * 10 - 5;
    this.speedY = Math.random() * 10 - 5;
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width) {
      this.speedX = -this.speedX;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
    }
  }
}

function init() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(width / 2, height / 2));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
}

init();
animate();
