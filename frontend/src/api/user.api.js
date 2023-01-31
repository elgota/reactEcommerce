import axios from "axios";

export const createUserRequest = async (user) => {
  return await axios.post("http://localhost:4000/api/users", user);
};

export const updateUserRequest = async (userId, user) => {
  return await axios.put(`http://localhost:4000/api/users/${userId}`, user);
};
