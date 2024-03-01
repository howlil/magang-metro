import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL ,
});

export const tambahPost = async (postData) => {
  try {
    const res = await API.post("/postingan", postData);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
