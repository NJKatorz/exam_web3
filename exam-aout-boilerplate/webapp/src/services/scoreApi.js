import axios from "axios"

const baseUrl = "//localhost:3001/scores"

const getAllScores = () => axios.get(baseUrl).then(response => response.data)

const createOneScore = (scorePayload) => axios.post(baseUrl, scorePayload).then(response => response.data)

const scoreApi = {
  getAllScores,
  createOneScore,
  
}

export default scoreApi;