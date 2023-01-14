import http from './http'

export const User = {
  suggestUserList({ page, perPage }) {
    return http.get(`/api/users/suggested`, {
      params: {
        page,
        per_page: perPage
      }
    })
  },
  getUser(nameUser) {
    return http.get(`/api/users/@${nameUser}`)
  }
}
