export type Thumbnail = {
  path: string;
  extension: string;
};

export type Comic = {
  id: number;
  resourceURI: string;
  name: string;
  title: string;
  issn: string;
  thumbnail: Thumbnail;
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: Comic[];
  returned: number;
};

export type Serie = {
  resourceURI: string;
  name: string;
};

export type Series = {
  available: number;
  collectionURI: string;
  items: Serie[];
  returned: number;
};

export type Story = {
  resourceURI: string;
  name: string;
  type: string;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
};

export type Event = {
  resourceURI: string;
  name: string;
};

export type Events = {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
};

export type Url = {
  type: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics?: Comics;
  series?: Series;
  stories?: Stories;
  events?: Events;
  urls?: Url[];
};
