const tampilPosisi = async () => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let req;
  try {
    const response = await fetch(
      "https://28jqlrhg-5000.asse.devtunnels.ms/tampilGaleri",
      requestOptions
    );
    req = await response.json();
    return req;

  } catch (error) {
    console.error(error);
    return []
  }

};

export default tampilPosisi;
