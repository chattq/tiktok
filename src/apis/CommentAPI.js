import http from './http'

export const CommentAPI = {
  getCommentVideo(idVideos) {
    if(idVideos) {
        return http.get(`/api/videos/${idVideos}/comments`)
    }
  },
  createANewComment(uuidVideos, dataComment) {
    if(uuidVideos) {
        return http.post(`/api/videos/${uuidVideos}/comments`, {
          comment: dataComment
        })
    }
  },
  deleteAComment( idComment) {
    if(idComment) {
        return http.delete(`/api/comments/${idComment}`)
    }
  },
}