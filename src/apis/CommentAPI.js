import http from './http'

export const CommentAPI = {
  getCommentVideo(idVideos, page = 1) {
    if(idVideos) {
        return http.get(`/api/videos/${idVideos}/comments?page=${page}`)
    }
  },
  createANewComment({uuidVideos, dataComment}) {
    console.log('uuidVideos', uuidVideos)
    console.log('dataComment', dataComment)
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