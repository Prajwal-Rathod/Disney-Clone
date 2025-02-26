import axios from "axios";

const movieBaseUrl = "value";
const api_key = "value";

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error fetching trending videos:", error));

  export default getTrendingVideos;