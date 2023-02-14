import React from 'react'
import VideosItemNotLogin from './VideosItemNotLogin'
import VideosItems from './VideosItems'

function VideosList({ dataRender, previousPath }) {
  return (
    <>
      {dataRender.map((item, index) => {
        return (
          <div key={item.uuid}>
            <VideosItems data={item} totalData={dataRender} previousPath={previousPath} />
          </div>
        )
      })}
    </>
  )
}

export default VideosList
