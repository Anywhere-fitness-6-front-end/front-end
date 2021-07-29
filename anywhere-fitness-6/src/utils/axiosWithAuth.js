import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  //axios stub
  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://infinite-anchorage-25635.herokuapp.com/",
  });
};

export default axiosWithAuth;
