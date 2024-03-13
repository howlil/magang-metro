const loginAdmin = async (username, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("username", username);
  urlencoded.append("password", password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      "http://localhost:5000/loginAdmin",
      requestOptions
    );

    // if (!response.ok) {
    //   throw new Error(
    //     `Network response was not ok, status: ${response.status}`
    //   );
    // }
    const result = await response.json();
    const token = result.token;

    if (token) {
      localStorage.setItem("authToken", token);
    }
    return result;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

export default loginAdmin;
