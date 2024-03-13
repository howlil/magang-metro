const hapusPost = async (id_postingan) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
      };
      
    let del;
    try {
      const response = await fetch(
        `http://localhost:5000/hapusPostingan/${id_postingan}`,
        requestOptions
      );
      del = await response.json();
      console.log(del.id_postingan);
    } catch (error) {
      console.error(error);
    }
  
    return del;
  };
  
  export default hapusPost;
  