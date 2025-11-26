import hammerImg from '../assets/hammer.png';

export default class HammerCursor {
  constructor() {
    this.hammer = document.createElement('div');
    this.hammer.classList.add('hammer-cursor');
    this.hammer.style.backgroundImage = `url(${hammerImg})`;

    document.body.append(this.hammer);
    document.body.style.cursor = 'none';

    this.bindEvents();
  }

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.hammer.style.left = `${e.clientX - 35}px`;
      this.hammer.style.top = `${e.clientY - 35}px`;
    });

    document.addEventListener('click', () => {
      this.hammer.classList.add('hit');
      setTimeout(() => this.hammer.classList.remove('hit'), 200);
    });
  }

  destroy() {
    if (this.hammer?.parentElement) {
      this.hammer.parentElement.removeChild(this.hammer);
    }
    document.body.style.cursor = 'default';
  }
}
