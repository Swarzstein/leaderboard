import { getLeaderboard } from './DBqueries.js';

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  getScores() {
    let n = 0;
    let leaderboard = getLeaderboard().map(
      (score) => {
        n += 1;
        if(n%2 == 0){
          return `
          <div class="player">
            <span class="player-name">${score.name}:</span>
            <div><span class="score">${score.score}</span> <span class="cup">1</span></div>
          </div>`;
        }else{
            return `
          <div class="player gray">
            <span class="player-name">${score.name}:</span>
            <div><span class="score">${score.score}</span> <span class="cup">1</span></div>
          </div>`;
        }
      }
    );
    return leaderboard.length > 1 ? leaderboard.reduce((prev, score) => prev + score) : leaderboard;
  }
}

export default Scores;

