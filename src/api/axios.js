import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "166c5b18b633b647c49c49a1bb15e6f2",
    language: "ko-KR",
  },
});

export default instance;
