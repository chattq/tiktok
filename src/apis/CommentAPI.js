import http from './http'

export const Comment = {
  getCommentVideo(idVideos) {
    if(idVideos) {
        return http.get(`/api/videos/${idVideos}/comments`)
    }
  }
}