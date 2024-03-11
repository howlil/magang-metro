const getKonsul = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    let req;
    try {
      const response = await fetch(
        "http://localhost:5000/totalKonsultasi",
        requestOptions
      );
      req = await response.json();
    } catch (error) {
      console.error(error);
    }
  
    return req;
  };
  
  export default getKonsul;
  