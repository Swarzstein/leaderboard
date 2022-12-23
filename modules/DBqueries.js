const getLeaderboard = async () => {
  const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ysQ1X0ihl21K94bLGtw9/scores');
  const response = await request.json();
  return response.result;
};

const setLeaderboard = (name, points) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ysQ1X0ihl21K94bLGtw9/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: points,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json());
};

export { getLeaderboard, setLeaderboard };
