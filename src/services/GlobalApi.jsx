import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "6fe2647c48481f0f7666bc81cd1481a";

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`)
  .then(response => console.log(response.data))
  .catch(error => console.error("Error fetching trending videos:", error));

  export default getTrendingVideos;