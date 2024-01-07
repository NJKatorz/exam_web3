import axios from "axios"

const baseUrl = "//localhost:3001/jokes"
// const baseUrl = "http://localhost:3001"

const getAllJokes = () => axios.get(baseUrl).then(response => response.data)
// const getId = (id) => axios.get(`${baseUrl}/jokes/${id}`).then(response => response.data);

const jokeApi = {
  getAllJokes,
  // getId,
  
}

export default jokeApi;