export const defaultPlayers = [
  { score: 96, firstName: 'John', lastName: 'Junge' },
  { score: 88, firstName: 'Rob', lastName: 'Vera' },
  { score: 96, firstName: 'Bob', lastName: 'Geary' },
  { score: 96, firstName: 'Alice', lastName: 'Geary' },
];

const getRandomString = () => Math.random().toString(36).substr(2, 9);

export const getPlayerObj = playerEntries => playerEntries
  .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

export const addId = player => ({
  ...player,
  score: Number(player.score),
  id: `${player.firstName}${player.lastName}-${getRandomString()}`,
});

export const parsePlayer = playerEntries => addId(getPlayerObj(playerEntries));

export const compareByNumField = (a, b, isAsc) => (isAsc ? a - b : b - a);

export const compareByStringField = (a, b, isAsc) =>
  (isAsc ? a.localeCompare(b) : b.localeCompare(a));
