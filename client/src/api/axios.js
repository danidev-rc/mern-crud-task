 import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://back-task-3d72.onrender.com/api',
  withCredentials: true
})

export default instance
