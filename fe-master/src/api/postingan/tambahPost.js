import axios from "axios";

export const tambahPost = async (postData) => {
  try {
    const response = await axios.post(
      "/api/tambahPostingan",
      new URLSearchParams({ postData})
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
