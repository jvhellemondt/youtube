import axios from "axios";

// Get KEY at
// https://console.developers.google.com/apis/
const KEY = "";

export default axios.create( {
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
} );