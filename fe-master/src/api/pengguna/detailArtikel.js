const fetchDetailArtikel = async (id_postingan) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
        const response = await fetch(`http://localhost:5000/detailArtikel/${id_postingan}`);
        if (!response.ok) {
          throw new Error('Gagal mengambil data artikel');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
        return null;
      }
  };
  
  export default fetchDetailArtikel;
  