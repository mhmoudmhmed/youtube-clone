import axios from "axios";
const KEY = "AIzaSyCmgOA18uXqtqyalVoSPorFZw2mfZzJesk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    key: KEY,
    type: 'video',
  },
});
