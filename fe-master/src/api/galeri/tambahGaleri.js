const tambahGaleri = async (file) => {
  const myHeaders = new Headers();
  const token = localStorage.getItem("authToken");

  myHeaders.append("Authorization", `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append("file", file);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://localhost:5000/tambahGaleri",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res = await response.json();
    console.log("Response:", res);
    return res;
  } catch (error) {
    console.error("Error during fetch:", error);
  }
};

export default tambahGaleri;
