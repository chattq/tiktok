import axios from 'axios'

class Http {
  constructor() {
    const token = JSON.parse(localStorage.getItem('token'))
    this.instance = axios.create({
      baseURL: 'https://tiktok.fullstack.edu.vn',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer${token} `
      }
    })
  }
}

const http = new Http().instance

export default http
