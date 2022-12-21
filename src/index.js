import './style.css';
import Scores from '../modules/scores.js';

const printLeaderboard = () => {
  const scores = new Scores();
  document.querySelector('#leaderboard').innerHTML = scores.getScores();
}
// printLeaderboard();
document.querySelector('#refresh').addEventListener('click', printLeaderboard);