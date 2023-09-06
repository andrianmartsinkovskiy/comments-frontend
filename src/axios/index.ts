import axios from 'axios'

const axiosRequest = axios.create({
  baseURL: 'http://localhost:8001/',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export { axiosRequest }
