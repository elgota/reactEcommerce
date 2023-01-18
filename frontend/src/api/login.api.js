import axios from "axios";

export const login = async (data) =>
  await axios.post("http://localhost:4000/api/login", data);
