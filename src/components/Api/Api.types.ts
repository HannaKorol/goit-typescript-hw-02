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
  results: Image[];
  total: number;
  total_pages: number;
}
