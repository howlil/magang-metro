const tampilKategori = async () => {
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
      "http://localhost:5000/tampilKategori",
      requestOptions
    );
    req = await response.json();
    console.log(req.data);
  } catch (error) {
    console.error(error);
  }

  return req;
};

export default tampilKategori;