const tambahPosisi = async (nama_posisi) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("nama_posisi", nama_posisi);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  let res;
  try {
    const req = await fetch(
      "http://localhost:5000/tambahPosisi",
      requestOptions
    );
    res = req.json();
  } catch (error) {
    console.log(error);
  }
  return res;
};

export default tambahPosisi;
