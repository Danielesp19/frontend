const SERVER_IP ="http://localhost:3002";
const API_URL =`${SERVER_IP}/api/v1`;

export const ENV ={
  BASE_PATH:SERVER_IP,
  BASE_API:API_URL,
  API_ROUTES:{
    REGISTER: "users/new-user",
    LOGIN:"users/:id"
  }
}