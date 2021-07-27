import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  //axios stub
  return axios.create({
    headers: {
      authorization: token,
      baseURL: "",
    },
  });
};

export default axiosWithAuth;
