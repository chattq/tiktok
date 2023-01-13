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
  searchUser({ q, type }) {
    return http.get(`/api/users/search`, {
      params: {
        q: q,
        type: type
      }
    })
  }
}
