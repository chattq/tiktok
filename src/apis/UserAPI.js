import http from './http'

export const User = {
  suggestUserList({ page, perPage }) {
    return http.get(`/api/users/suggested`, {
      params: {
        page: page,
        per_page: perPage
      }
    })
  },
  followUserList({ page, perPage }) {
    return http.get(`/api/me/followings`, {
      params: {
        page: page,
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
  },
  getUser(nameUser) {
    return http.get(`/api/users/${nameUser}`)
  },
  followUser(idFollow) {
    return http.post(`/api/users/${idFollow}/follow`)
  },
  unFollowUser(idUnFollow) {
    return http.post(`/api/users/${idUnFollow}/unfollow`)
  },
  me() {
    return http.get('/api/auth/me')
  },
  updateMe(body) {
    return http.post('/api/auth/me?_method=PATCH', body)
  }
}
