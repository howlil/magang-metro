const detailPost = async ( id_team) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      
    try {
      const response = await fetch(
        `http://localhost:5000/detailTim/${id_team}`,
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  export default detailPost;
  