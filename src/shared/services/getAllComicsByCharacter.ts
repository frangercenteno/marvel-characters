export const GET_ALL_COMICS_BY_CHARACTER = (characterId: number | string) => ({
  url: `v1/public/characters/${characterId}/comics`,
  queryParams: {
    orderBy: "-onsaleDate",
    limit: 20,
  },
});
