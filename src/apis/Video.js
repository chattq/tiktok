import http from './http'

export const Videos = {
  getVideos(idVideos) {
    return http.get(`/api/videos/${idVideos}`)
  }
}
