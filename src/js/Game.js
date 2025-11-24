import GoblinSpawner from './GoblinSpawner.js';
import ScoreBoard from './ScoreBoard.js';

export default class Game {
  constructor() {
    this.isActive = false;
    this.cells = null;
    this.scoreBoard = null;
    this.goblinSpawner = null;

    this.initField();
  }

  initField() {
    const field = document.getElementById('game-field');
    field.innerHTML = '';

    this.cells = [];
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
    //   cell.addEventListener('click', () => {
    //     if (this.isActive && !cell.classList.contains('has-goblin')) {
    //       this.scoreBoard.miss();
    //       this.goblinSpawner.hideGoblin();
    //       if (this.isActive) {
    //         setTimeout(() => this.goblinSpawner.showGoblin(), 400);
    //       }
    //     }
    //   });
      field.appendChild(cell);
      this.cells.push(cell);
    }
  }

  start() {
    if (this.isActive) return;

    this.scoreBoard = new ScoreBoard();
    this.goblinSpawner = new GoblinSpawner(this.cells, this.scoreBoard, this);

    this.isActive = true;

    setTimeout(() => {
      this.goblinSpawner.showGoblin();
    }, 800);
  }

  stop() {
    this.isActive = false;
    if (this.goblinSpawner) {
      this.goblinSpawner.reset();
    }
  }

  restart() {
    this.stop();
    if (this.scoreBoard) {
      this.scoreBoard.reset();
    }
    setTimeout(() => this.start(), 500);
  }
}
