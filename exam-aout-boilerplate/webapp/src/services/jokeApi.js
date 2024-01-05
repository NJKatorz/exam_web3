import axios from "axios"


const baseUrl = "//localhost:3001/jokes"

const getAllJokes = () => axios.get(baseUrl).then(response => response.data)


const jokeApi = {
  getAllJokes,
  
}

export default jokeApi;