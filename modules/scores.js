import { getLeaderboard } from './DBqueries.js';

class Scores {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }

  getScores() {
    const leaderboard = getLeaderboard().map(
      (score) => {
        this.id += 1;
        if (this.id === 0) {
          return `
          <div class="player" id="player${score.id}">
            <span class="player-name">${score.name}:</span>
            <div><span class="score">${score.score}</span> <span class="cup">1</span></div>
          </div>`;
        }
        return `
          <div class="player gray" id="player${score.id}">
            <span class="player-name">${score.name}:</span>
            <div><span class="score">${score.score}</span> <span class="cup">1</span></div>
          </div>`;
      },
    );
    return leaderboard.length > 1 ? leaderboard.reduce((prev, score) => prev + score) : leaderboard;
  }
}

export default Scores;

