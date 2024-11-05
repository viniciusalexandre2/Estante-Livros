import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/",
  timeout: 2000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: "Bearer DzMbgC0mJvcw08AxeX4PudV3k0cMFyO5r7QcqAtT",
  },
});
