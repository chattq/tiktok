import http from './http'

export const Videos = {
  getVideos(idVideos) {
    return http.get(`/api/videos/${idVideos}`)
  },
  uploadVideo() {
    return http.post(`/api/videos`, {})
  },
  getVideosForyou(type, page) {
    return http.get(`/api/videos`, {
      params: {
        type: type,
        page: page
      }
    })
  },
  getVideosFollowing(type, page, token) {
    return http.get(`/api/videos`, {
      params: {
        type: type,
        page: page
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
