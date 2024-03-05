const tambahTim = async (
  fileTim,
  filePorto,
  nama,
  spesialis,
  id_posisi,
  deskripsi,
  instagram,
  linkedln
) => {
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

  let req;
  try {
    const response = await fetch(
      "https://28jqlrhg-5000.asse.devtunnels.ms/tambahTim",
      requestOptions
    );
    req = await response.json();
    console.log(req.message);
  } catch (error) {
    console.error(error);
  }

  return req;
};

export default tambahTim;
