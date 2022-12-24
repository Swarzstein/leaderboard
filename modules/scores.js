import { getLeaderboard, setLeaderboard } from './DBqueries.js';

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getScores = async () => {
    let leaderboard = await getLeaderboard();
    if (leaderboard.length === 0) return '<div class="player text-center">No scores registered yet</div>';

    let n = 0;
    leaderboard = leaderboard.length > 1 ? leaderboard.map(
      (score) => {
        n += 1;
        if (n % 2 === 0) {
          return `
          <div class="player green" id="player${n}">
            <span class="player-name">${score.user}:</span>
            <div><span class="score">${score.score}</span></div>
          </div>`;
        }
        return `
          <div class="player orange" id="player${n}">
            <span class="player-name">${score.user}:</span>
            <div><span class="score">${score.score}</span></div>
          </div>`;
      },
    ).reduce((prev, score) => prev + score) : `
    <div class="player" id="player1">
      <span class="player-name">${leaderboard[0].user}:</span>
      <div><span class="score">${leaderboard[0].score}</span></div>
    </div>`;
    return leaderboard;
  }

  setScore = () => {
    setLeaderboard(this.name, this.score);
  }
}

export default Scores;