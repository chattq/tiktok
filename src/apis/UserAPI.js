import http from './http'

export const User = {
  suggestUserList({ page, perPage }) {
    return http.get(`/api/users/suggested`, {
      params: {
        page,
        per_page: perPage
      }
    })
  }
}
