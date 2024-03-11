const tampilTim = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    let req;
    try {
      const response = await fetch(
        "http://localhost:5000/tampilTimLanding",
        requestOptions
      );
      req = await response.json();
      console.log(req);
    } catch (error) {
      console.error(error);
    }
  
    return req;
  };
  
  export default tampilTim;
  