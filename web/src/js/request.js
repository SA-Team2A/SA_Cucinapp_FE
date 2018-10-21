import axios from 'axios'
const apiUrl = process.env.API_URL || 'http://localhost:8080'

const req = (data) => axios({
  url: '/auth',
  method: 'post',
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
  data
})

const auth_req = (data) => axios({
  url: '/',
  method: 'post',
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  data
})

export { req, auth_req }
