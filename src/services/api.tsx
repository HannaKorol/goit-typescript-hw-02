import axios from "axios";

const fetchImages = async (page = 1, query = "") => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "76GsQFmCJ1YbYEygNigwaTkN0s0MvQh74iikP170ZS0",
      query: query,
      page: page,
      per_page: 12,
    },
  });
  return data.results; // Just return the data here
};

export default fetchImages;
