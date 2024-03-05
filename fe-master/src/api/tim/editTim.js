const editTim = async ( 
    fileTim,
    filePorto,
    nama,
    spesialis,
    id_posisi,
    deskripsi,
    instagram,
    linkedln,
    id_team) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("file_tim", fileTim);
  formdata.append("file_porto", filePorto);
  formdata.append("nama", nama);
  formdata.append("spesialis", spesialis);
  formdata.append("id_posisi", id_posisi);
  formdata.append("deskripsi", deskripsi);
  formdata.append("instagram", instagram);
  formdata.append("linkedln", linkedln);


  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `https://28jqlrhg-5000.asse.devtunnels.ms/editTim/${id_team}`,
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
export default editTim;
