let getLeaderboard = () => {
  const storage = [
    {
      name: 'Juan',
      score: 30,
    },
    {
      name: 'Joseph',
      score: 21,
    },
    {
      name: 'Isaí',
      score: 33,
    },
    {
      name: 'David',
      score: 25,
    },
    {
      name: 'Belay',
      score: 44,
    },
    {
      name: 'Iqbal',
      score: 29,
    },
  ];
  return storage !== null ? storage : [];
};

export { getLeaderboard };