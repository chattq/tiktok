import React from 'react'
import VideosItems from './VideosItems'

function VideosList({ dataRender }) {
  console.log(dataRender, 5)
  return (
    <div>
      {dataRender.map((item, index) => {
        return (
          <div key={item.uuid}>
            <VideosItems data={item} totalData={dataRender} />
          </div>
        )
      })}
    </div>
  )
}

export default VideosList
