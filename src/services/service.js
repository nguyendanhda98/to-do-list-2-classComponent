import axios from "axios";

export async function getAPI() {
  const res = await axios
    .get("http://localhost:3030/tasks")
    .then(function (response) {
      return response.data;
    });
  return res;
}
