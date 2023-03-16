export type AlbumSearchResponse = {
  results: RawAlbum[];
  resultCount: number;
};

export type RawAlbumSearchResponse = {
  results: {
    "opensearch:Query": unknown;
    "opensearch:totalResults": number;
    "opensearch:startIndex": number;
    "opensearch:itemsPerPage": number;
    albummatches: { album: RawAlbum[] };
  };
};

export type RawAlbumImage = {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
};

export type RawAlbum = {
  name: string;
  artist: string;
  url: string;
  image: RawAlbumImage[];
  streamable: string;
  mbid: string;
};
