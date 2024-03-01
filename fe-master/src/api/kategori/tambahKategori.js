import axios from "axios";

export const tambahKategori = async (kategoriData) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.post("/api/tambahKategori", kategoriData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return Promise.reject({
        kodeError: status,
        pesanError: data.message || "Terjadi kesalahan pada server",
      });
    } else {
      return Promise.reject({
        kodeError: "Jaringan",
        pesanError: "Terjadi kesalahan pada jaringan",
      });
    }
  }
};
