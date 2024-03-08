const tampilPostingan = async () => {
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
        "https://28jqlrhg-5000.asse.devtunnels.ms/tampilPostingan",
        requestOptions
      );
      req = await response.json();
      console.log(req);
    } catch (error) {
      console.error(error);
    }
    
    return req;
  };
  
  export default tampilPostingan;