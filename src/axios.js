import axios from "axios";
let token = localStorage.getItem("auth-token");

export default axios.create({
  baseURL: `http://localhost:3333/api`,
  headers: { "x-auth-token": token },
});
