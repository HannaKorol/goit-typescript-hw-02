export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}

export interface ApiResponse {
    client_id: string;
    page: number;
  query: string;
  results: Image[];
  per_page: number;
}
