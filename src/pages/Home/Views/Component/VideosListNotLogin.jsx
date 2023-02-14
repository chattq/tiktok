import React from 'react'
import VideosItemNotLogin from './VideosItemNotLogin'

function VideosListNotLogin({ dataRender, previousPath, isLogin }) {
  return (
    <>
      {dataRender.map((item, index) => {
        return (
          <div key={item.uuid}>
            <VideosItemNotLogin dataVideos={item} totalData={dataRender} previousPath={previousPath} />
          </div>
        )
      })}
    </>
  )
}

export default VideosListNotLogin
