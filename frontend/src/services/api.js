import axios from "axios";

export const ChangeSearchLocation = (address) => {
  const data = address;
  return axios.post("http://localhost:3003/external/getLocal", {
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
