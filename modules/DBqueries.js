const getLeaderboard = () => {
  const storage = [
    {
      id: 0,
      name: 'Juan',
      score: 30,
    },
    {
      id: 1,
      name: 'Joseph',
      score: 21,
    },
    {
      id: 2,
      name: 'Isaí',
      score: 33,
    },
    {
      id: 3,
      name: 'David',
      score: 25,
    },
    {
      id: 4,
      name: 'Belay',
      score: 44,
    },
    {
      id: 5,
      name: 'Iqbal',
      score: 29,
    },
  ];
  return storage !== null ? storage : [];
};

const setLeaderboard = () => {};

export { getLeaderboard, setLeaderboard };