import gnomeImg from '../assets/gnome.png';

export default class GoblinSpawner {
  constructor(cells, scoreBoard, game) {
    this.cells = cells;                    
    this.scoreBoard = scoreBoard;
    this.game = game;            
    this.currentTimeout = null;

    this.goblinImg = document.createElement('img');
    this.goblinImg.src = gnomeImg;
    this.goblinImg.alt = 'Гоблин';
    this.goblinImg.classList.add('goblin');
    this.goblinImg.addEventListener('click', () => this.onHit());
  }

  showGoblin() {
    this.hideGoblin();

    const emptyCells = [...this.cells].filter(
      cell => !cell.classList.contains('has-goblin')
    );

    if (emptyCells.length === 0) return;

    const randomCell =
      emptyCells[Math.floor(Math.random() * emptyCells.length)];

    randomCell.classList.add('has-goblin');
    randomCell.appendChild(this.goblinImg);

    this.currentTimeout = setTimeout(() => {
      if (randomCell.classList.contains('has-goblin')) {
        this.scoreBoard.miss();
        this.hideGoblin();
        if (this.game.isActive) this.showGoblin();
      }
    }, 1000);
  }

  onHit() {
    if (!this.game.isActive) return;

    this.scoreBoard.hit();
    this.hideGoblin();
    clearTimeout(this.currentTimeout);

    if (this.game.isActive) {
      setTimeout(() => this.showGoblin(), 300);
    }
  }

  hideGoblin() {
    this.cells.forEach(cell => {
      cell.classList.remove('has-goblin');
      if (cell.contains(this.goblinImg)) {
        cell.removeChild(this.goblinImg);
      }
    });
  }

  reset() {
    clearTimeout(this.currentTimeout);
    this.hideGoblin();
  }
}
