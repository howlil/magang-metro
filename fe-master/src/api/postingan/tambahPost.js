const tambahPostingan = async (judul, slug, kategori, body, file) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("judul", judul);
  formdata.append("slug", slug);
  formdata.append("kategori", kategori);
  formdata.append("body", body);
  formdata.append("file", file);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  let req;
  try {
    const response = await fetch(
      "https://28jqlrhg-5000.asse.devtunnels.ms/tambahPostingan",
      requestOptions
    );
    req = await response.json();
    console.log(req);
  } catch (error) {
    console.error(error);
  }


  return req;
};

export default tambahPostingan;
