import type { Comic } from "@/shared/types";

export const mockComics: Comic[] = [
  {
    id: 1,
    title: "Test Comic 1",
    thumbnail: {
      path: "/test/image1",
      extension: "jpg",
    },
    resourceURI: "http://test.com/1",
    name: "Test Comic 1",
    issn: "1234-5678",
    dates: [
      {
        type: "onsaleDate",
        date: new Date("2021-10-10"),
      },
    ],
  },
  {
    id: 2,
    title: "Test Comic 2",
    thumbnail: {
      path: "/test/image2",
      extension: "jpg",
    },
    resourceURI: "http://test.com/2",
    name: "Test Comic 2",
    issn: "5678-1234",
    dates: [
      {
        type: "onsaleDate",
        date: new Date("2021-10-11"),
      },
    ],
  },
];
