import { Comic } from "../types";

export function sortByDate(comics: Comic[]): Comic[] {
  return comics.sort((a, b) => {
    const dateA = a.dates.find((date) => date.type === "onsaleDate")?.date;
    const dateB = b.dates.find((date) => date.type === "onsaleDate")?.date;
    if (dateA && dateB) {
      return new Date(dateA).getTime() - new Date(dateB).getTime();
    }
    return 0;
  });
}
