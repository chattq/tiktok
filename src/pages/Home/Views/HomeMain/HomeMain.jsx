import React from 'react'

export default function HomeMain() {
  return (
    <div>
      <div>
        <div className='flex'>
          <div className='mr-4 h-[56px] w-[56px] overflow-hidden rounded-full'>
            <img
              src='https://i.9mobi.vn/cf/Images/np/2022/8/30/hinh-nen-16.jpg'
              alt=''
              className='h-full w-full object-cover'
            />
          </div>
          <div>
            <div>
              <span className='text-lg font-bold'>nhunghy29</span>
              <span className='ml-2'>Bùi Thu Trà</span>
            </div>
            <div className='mt-2 text-base font-normal'>Ước mơ năm 22 tuổi của em nay đã xong rồi</div>
            <div>Nhạc Nền - Bùi Thu Trà</div>
            <div className='flex'>
              <div>
                <video
                  controls
                  autoPlay
                  src='https://scontent.fhan15-1.fna.fbcdn.net/v/t42.1790-2/277047787_386015380193958_3266594963260024057_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=985c63&efg=eyJybHIiOjMwNCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=0I9pvFIthe4AX9Nq0G3&_nc_oc=AQmGTFmfuZJQ2DMKzEOu5QFZ9_SZVysvoEZ8dNi0fS6nSLGFbVAKbx-DGmSx4TqZvjQTOLdv5vGCB4e3lt7wWoVy&rl=304&vabr=169&_nc_ht=scontent.fhan15-1.fna&oh=00_AfCIH98e_DBGYt1_nCz86r2Op42NCMQxB3hhnlV2XxIFog&oe=63B67516'
                />
              </div>
              <div>thả tym</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
