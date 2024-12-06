import axiosClient from ".";
const authServices = {
  login: (
    data: {
      username: string;
      password: string;
    },
    tokenAxios?: any
  ) => {
    return axiosClient.post(`/web-authenticate`, data, {
      cancelToken: tokenAxios,
    });
  },
};
export default authServices;
