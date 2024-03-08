const editPosisi = async (nama_posisi, id_posisi) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const urlencoded = new URLSearchParams();
    urlencoded.append("nama_posisi", nama_posisi);
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `https://28jqlrhg-5000.asse.devtunnels.ms/editPosisi/${id_posisi}`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  export default editPosisi;
  