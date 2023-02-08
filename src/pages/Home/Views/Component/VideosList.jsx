import React from 'react'
import VideosItems from './VideosItems'

function VideosList({ dataRender, previousPath }) {
  console.log(dataRender, 5)
  return (
    <div>
      {dataRender.map((item, index) => {
        return (
          <div key={item.uuid}>
            <VideosItems data={item} totalData={dataRender} previousPath={previousPath} />
          </div>
        )
      })}
    </div>
  )
}

export default VideosList
