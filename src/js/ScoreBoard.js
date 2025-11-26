export default class ScoreBoard {
  constructor() {
    this.hits = 0;
    this.misses = 0;

    this.createScoreElements();
  }

  createScoreElements() {
    const container = document.createElement('div');
    container.classList.add('scoreboard');

    this.hitsEl = document.createElement('div');
    this.hitsEl.classList.add('hits');
    this.hitsEl.innerHTML = `Попадания: <span>0</span>`;

    this.missesEl = document.createElement('div');
    this.missesEl.classList.add('misses');
    this.missesEl.innerHTML = `Промахи: <span>0</span>/5`;

    container.append(this.hitsEl, this.missesEl);
    document.body.insertBefore(container, document.getElementById('game-field'));
  }

  hit() {
    this.hits++;
    this.hitsEl.querySelector('span').textContent = this.hits;
  }

  miss() {
    this.misses++;
    this.missesEl.querySelector('span').textContent = this.misses;

    if (this.misses >= 5) {
      setTimeout(() => {
        alert(`Игра окончена! Вы поймали ${this.hits} гоблинов!`);
        this.reset();
      }, 100);
    }
  }

  reset() {
    this.hits = 0;
    this.misses = 0;
    this.hitsEl.querySelector('span').textContent = '0';
    this.missesEl.querySelector('span').textContent = '0';
  }
}
