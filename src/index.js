import './style.css';
import Scores from '../modules/scores.js';

const printLeaderboard = async () => {
  const scores = new Scores();
  const leaderboard = await scores.getScores();
  document.querySelector('#leaderboard').innerHTML = leaderboard;
};

printLeaderboard();
document.querySelector('#refresh').addEventListener('click', printLeaderboard);
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formName = document.querySelector('#form-name');
  const username = formName.value;
  const formScore = document.querySelector('#form-score');
  const points = formScore.value;
  const scores = new Scores(username, points);
  scores.setScore();
  document.querySelector('#form-name').value = '';
  document.querySelector('#form-score').value = '';
});