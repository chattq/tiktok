import http from './http'
export const Account = {
  getLogin(email, password) {
    return http.post(`/api/auth/login`, {
      email: email,
      password: password
    })
  },
  getSignUp(type, email, password) {
    return http.post(`/api/auth/register`, {
      type: type,
      email: email,
      password: password
    })
  },
  getLogout() {
    return http.post(`/api/auth/logout`, {
     
    })
  }
}
