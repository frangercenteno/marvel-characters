import type { Character } from "@/shared/types";

export const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Iron Man",
    description: "Genius. Billionaire. Playboy. Philanthropist.",
    modified: "2021-09-01T10:30:00Z",
    thumbnail: {
      path: "https://example.com/ironman",
      extension: "jpg",
    },
    resourceURI: "https://example.com/characters/ironman",
    comics: {
      available: 100,
      collectionURI: "https://example.com/characters/ironman/comics",
      items: [
        {
          id: 1,
          resourceURI: "https://example.com/comics/ironman/1",
          name: "Iron Man Vol. 1",
          title: "Iron Man Vol. 1",
          issn: "1234-5678",
          thumbnail: {
            path: "https://example.com/comics/ironman/1",
            extension: "jpg",
          },
        },
        // Add more comics here
      ],
      returned: 20,
    },
    series: {
      available: 50,
      collectionURI: "https://example.com/characters/ironman/series",
      items: [
        {
          resourceURI: "https://example.com/series/ironman/1",
          name: "Iron Man Series 1",
        },
        // Add more series here
      ],
      returned: 10,
    },
    stories: {
      available: 200,
      collectionURI: "https://example.com/characters/ironman/stories",
      items: [
        {
          resourceURI: "https://example.com/stories/ironman/1",
          name: "Iron Man Story 1",
          type: "comic",
        },
        // Add more stories here
      ],
      returned: 30,
    },
    events: {
      available: 10,
      collectionURI: "https://example.com/characters/ironman/events",
      items: [
        {
          resourceURI: "https://example.com/events/ironman/1",
          name: "Iron Man Event 1",
        },
        // Add more events here
      ],
      returned: 5,
    },
    urls: [
      {
        type: "detail",
        url: "https://example.com/characters/ironman",
      },
      {
        type: "wiki",
        url: "https://example.com/characters/ironman/wiki",
      },
    ],
  },
  {
    id: 2,
    name: "Captain America",
    description: "Super soldier and leader of the Avengers.",
    modified: "2021-09-01T10:30:00Z",
    thumbnail: {
      path: "https://example.com/captainamerica",
      extension: "jpg",
    },
    resourceURI: "https://example.com/characters/captainamerica",
    comics: {
      available: 150,
      collectionURI: "https://example.com/characters/captainamerica/comics",
      items: [
        {
          id: 2,
          resourceURI: "https://example.com/comics/captainamerica/1",
          name: "Captain America Vol. 1",
          title: "Captain America Vol. 1",
          issn: "5678-1234",
          thumbnail: {
            path: "https://example.com/comics/captainamerica/1",
            extension: "jpg",
          },
        },
        // Add more comics here
      ],
      returned: 30,
    },
    series: {
      available: 80,
      collectionURI: "https://example.com/characters/captainamerica/series",
      items: [
        {
          resourceURI: "https://example.com/series/captainamerica/1",
          name: "Captain America Series 1",
        },
        // Add more series here
      ],
      returned: 15,
    },
    stories: {
      available: 300,
      collectionURI: "https://example.com/characters/captainamerica/stories",
      items: [
        {
          resourceURI: "https://example.com/stories/captainamerica/1",
          name: "Captain America Story 1",
          type: "comic",
        },
        // Add more stories here
      ],
      returned: 40,
    },
    events: {
      available: 20,
      collectionURI: "https://example.com/characters/captainamerica/events",
      items: [
        {
          resourceURI: "https://example.com/events/captainamerica/1",
          name: "Captain America Event 1",
        },
        // Add more events here
      ],
      returned: 8,
    },
    urls: [
      {
        type: "detail",
        url: "https://example.com/characters/captainamerica",
      },
      {
        type: "wiki",
        url: "https://example.com/characters/captainamerica/wiki",
      },
    ],
  },
  {
    id: 3,
    name: "Thor",
    description: "God of Thunder and member of the Avengers.",
    modified: "2021-09-01T10:30:00Z",
    thumbnail: {
      path: "https://example.com/thor",
      extension: "jpg",
    },
    resourceURI: "https://example.com/characters/thor",
    comics: {
      available: 120,
      collectionURI: "https://example.com/characters/thor/comics",
      items: [
        {
          id: 3,
          resourceURI: "https://example.com/comics/thor/1",
          name: "Thor Vol. 1",
          title: "Thor Vol. 1",
          issn: "9876-5432",
          thumbnail: {
            path: "https://example.com/comics/thor/1",
            extension: "jpg",
          },
        },
        // Add more comics here
      ],
      returned: 25,
    },
    series: {
      available: 70,
      collectionURI: "https://example.com/characters/thor/series",
      items: [
        {
          resourceURI: "https://example.com/series/thor/1",
          name: "Thor Series 1",
        },
        // Add more series here
      ],
      returned: 12,
    },
    stories: {
      available: 250,
      collectionURI: "https://example.com/characters/thor/stories",
      items: [
        {
          resourceURI: "https://example.com/stories/thor/1",
          name: "Thor Story 1",
          type: "comic",
        },
        // Add more stories here
      ],
      returned: 35,
    },
    events: {
      available: 15,
      collectionURI: "https://example.com/characters/thor/events",
      items: [
        {
          resourceURI: "https://example.com/events/thor/1",
          name: "Thor Event 1",
        },
        // Add more events here
      ],
      returned: 6,
    },
    urls: [
      {
        type: "detail",
        url: "https://example.com/characters/thor",
      },
      {
        type: "wiki",
        url: "https://example.com/characters/thor/wiki",
      },
    ],
  },
  // Add more characters here
];
