import axios from 'axios'
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3001

const url = `http://localhost:${port}/anecdotes`

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, { content, votes: 0 })
  return response.data
}

const axiosVote = async (content) => {
  const response = await axios.put(`${url}/${content.id}`,
    { content: content.content,
      id: content.id,
      votes: content.votes + 1 }
  )
  return response.data
}

export default {
  getAll, createNew, axiosVote
}