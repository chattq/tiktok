import http from './http'

export const LikeAPI = {
  LikePost(idVideo) {
    return http.post(`/api/videos/${idVideo}/like`)
  },
  UnLikePost(idVideo) {
    return http.post(`/api/videos/${idVideo}/unlike`)
  },
  LikeComment(idComment) {
    return http.post(`/api/comments/${idComment}/like`)
  },
  UnLikeComment(idComment) {
    return http.post(`/api/comments/${idComment}/unlike`)
  },
}