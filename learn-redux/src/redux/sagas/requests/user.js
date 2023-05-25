import axios from "axios";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: "http://localhost:8081/user",
    // url:'https://my-json-server.typicode.com/BhaveshWagh/demo/user'
  });
}
