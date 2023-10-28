/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = {content, important: false}
    const response = await axios.post(baseUrl, object)
    return response.data
}

const updateImportance = async (id, content, isImportant) => {

    const response = await axios.put(`${baseUrl}/${id}`, { content: content, important: isImportant })
    return response.data
}



export default { getAll , createNew, updateImportance}