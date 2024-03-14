export const GET_CHARACTER_BY_ID = (characterId: number | string) => ({
  url: `v1/public/characters/${characterId}`,
});
