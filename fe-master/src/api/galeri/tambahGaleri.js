const tambahKategori = async ( file) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append(
    "file",
    file
  );

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "https://28jqlrhg-5000.asse.devtunnels.ms/tambahGaleri",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result));
};

export default tambahKategori;
