import axios, { AxiosTransformer } from "axios";
import moment from "moment";

const dateTransformer: AxiosTransformer = (data) => {
  if (
    data instanceof String ||
    data instanceof Boolean ||
    data instanceof Number ||
    data instanceof FormData
  ) {
    return data;
  }
  if (data instanceof Date) {
    const nDate = moment(data).toISOString(true);
    return nDate;
  }
  if (Array.isArray(data)) {
    return data.map((val) => dateTransformer(val));
  }

  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, val]) => [key, dateTransformer(val)])
    );
  }
  return data;
};

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/",
  transformRequest: [
    dateTransformer,
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
});

export default api;
