const editPost = async (judul, slug,kategori,body,file,id_postingan) => {
    const myHeaders = new Headers();
    const token = localStorage.getItem("authToken");
    myHeaders.append("Authorization", `Bearer ${token}`);
  
    const formdata = new FormData()
        formdata.append("judul", judul);
        formdata.append("slug", slug);
        formdata.append("kategori", kategori);
        formdata.append("body", body );
        formdata.append("file", file);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        `http://localhost:5000/editPostingan/${id_postingan}`,
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
  export default editPost;
  