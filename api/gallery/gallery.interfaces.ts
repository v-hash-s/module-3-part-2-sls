interface GalleryResponse {
  total: number;
  objects: Array<string>;
}

interface QueryParameters {
  limit?: string;
  page?: number | string | undefined;
  filter?: string;
}

interface Response {
  content: string | { errorMessage: string };
  statusCode: number;
}

export { GalleryResponse, QueryParameters, Response };
