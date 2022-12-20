import axios from "axios";
const KEY = "AIzaSyBYVYaTUV0GyiFnCACgE6Oz-BwjNSMH8P0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
