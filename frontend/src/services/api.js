import axios from "axios";

export const GetAll = () => {
  return axios.get("http://localhost:3003/api/ongs", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const ChangeSearchLocation = (address) => {
  const data = address;
  return axios.post("http://localhost:3003/external/getLocal", {
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const CreateOng = (dados) => {
  let data = dados;
  return axios.post("http://localhost:3003/api/ongs", {
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
