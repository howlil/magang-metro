const hapusGaleri = async (id_galeri) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
  
    let del;
    try {
      const response = await fetch(
        `http://localhost:5000/hapusGaleri/${id_galeri}`,
        requestOptions
      );
      del = await response.json();
      console.log(del);
    } catch (error) {
      console.error(error);
    }
  
    return del;
  };
  
  export default hapusGaleri;
  