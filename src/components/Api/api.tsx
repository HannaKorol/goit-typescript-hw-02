import axios from "axios";
import { ApiResponse, Image } from "./Api.types";

const fetchImages = async (page:number = 1, query:string = ""): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: "76GsQFmCJ1YbYEygNigwaTkN0s0MvQh74iikP170ZS0",
        query: query,
        page: page,
        per_page: 12,
      },
    }
  );
  return data; // Just return the data here
};

export default fetchImages;
