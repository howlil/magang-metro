const hapusTim = async (id_team) => {
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
        `http://localhost:5000/hapusTim/${id_team}`,
        requestOptions
      );
      del = await response.json();
      console.log(del.id_team);
    } catch (error) {
      console.error(error);
    }
  
    return del;
  };
  
  export default hapusTim;
  