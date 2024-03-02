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

  fetch(
    "https://28jqlrhg-5000.asse.devtunnels.ms/tambahKategori",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result));
};

export default tambahKategori;
