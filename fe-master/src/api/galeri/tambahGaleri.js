const tambahKategori = async ( file) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");

  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append(
    "file",file
  );

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

    let res
    try {
      const req = await fetch(  "https://28jqlrhg-5000.asse.devtunnels.ms/tambahGaleri",
      requestOptions)

      res = req.json()
      console.log('====================================');
      console.log(req);
      console.log('====================================');
    } catch (error) {
      console.log(error);
    }

    return res
};

export default tambahKategori;
