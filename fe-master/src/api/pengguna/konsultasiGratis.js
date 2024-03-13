const konsultasiGratis = async (data) => {

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    };
  
    let req;
  try {
    const response = await fetch(
      "http://localhost:5000/addKonsultasiGratis",
      requestOptions
    );
    req = response.json();
    console.log(req);
  } catch (error) {
    console.error(error);
  }

  return req;
  };
  
  export default konsultasiGratis;
  