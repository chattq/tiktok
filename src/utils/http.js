import axios from 'axios'

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://tiktok.fullstack.edu.vn',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

const http = new Http().instance
