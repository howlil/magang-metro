const tambahKategori = async (namaKategori, slug) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("nama_kategori", namaKategori);
  urlencoded.append("slug", slug);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  let request;
  try {
    const response = await fetch(
      "https://28jqlrhg-5000.asse.devtunnels.ms/tambahKategori",
      requestOptions
    )
      request = await response.json()
  } catch (error) {
    console.log(error);
  }
  return request
   
};

export default tambahKategori;
