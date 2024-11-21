import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/",
  timeout: 2000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: "Bearer 12120323",
  },
});
