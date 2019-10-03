import axios from "axios";

const KEY = "AIzaSyB8ZBIApwndHTVAtbVbbZ4ZFyiKgBeEPKU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
