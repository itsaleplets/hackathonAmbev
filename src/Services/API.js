const getAPI = async () => {
  const result = await fetch('http://127.0.0.1:5000/');
  const response = await result.json();
  return response;
};

export default getAPI;
