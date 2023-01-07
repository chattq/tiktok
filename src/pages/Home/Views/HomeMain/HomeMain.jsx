import React from 'react'

export default function HomeMain() {
  return (
    <div>
      <div className='w-[710px]'>
        <div className='flex'>
          <div>
            <div className='mt-1 h-[56px] w-[56px] overflow-hidden rounded-full'>
              <img
                src='https://i.9mobi.vn/cf/Images/np/2022/8/30/hinh-nen-16.jpg'
                alt=''
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          <div className='ml-3 p-1'>
            <div className='flex items-center'>
              <div className='text-[18px] font-black'>alominjne</div>
              <div className='ml-2 text-[14px] font-extralight tracking-tighter'>Nhạc Như Music 🎧</div>
              <div className='mt-3 h-4 translate-x-[285px]'>
                <div className='cursor-pointer rounded-md border border-[rgba(254,44,85,1)] px-5 py-1 hover:bg-[#FFF2F5]'>
                  <button className='font-medium text-[rgba(254,44,85,1)]' type='button'>
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className='text-base w-[430px] font-light leading-6 tracking-tighter line-clamp-3'>
              hóng nha ae có quà đó #roblox #bloxfruits #xuhuong #fypa hóng nha ae có quà đó #roblox #bloxfruits
              #xuhuong #fypa hóng nha ae có quà đó #roblox #bloxfruits #xuhuong #fypa hóng nha ae có quà đó #roblox
              #bloxfruits #xuhuong #fypa
            </div>
            <div className='mt-1 font-medium'>Nhạc Nền - Bùi Thu Trà</div>
            <div className='mt-3 flex w-[calc(450px+((100vw-768px)/1152)*100)] items-start overflow-hidden '>
              <div className='mr-2 max-h-[500px]'>
                <video
                  className='w-full rounded-lg'
                  controls
                  autoPlay
                  src='https://v16-webapp.tiktok.com/4078bfd045ef3878038614a5b79902cb/63b9c375/video/tos/useast2a/tos-useast2a-pve-0037-aiso/2aa4a25994074b0d98aef0388079725b/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2052&bt=1026&cs=0&ds=3&ft=4b~OyM3a8Zmo0jSKo64jV_idPpWrKsdm&mime_type=video_mp4&qs=0&rc=ZDc1NWg5NTo5NTo3Nmg7Z0BpajZocWY6Zmw2ZzMzZjgzM0A2YzViYi0vNTYxY2A0YTFgYSMtcGgycjRvNC9gLS1kL2Nzcw%3D%3D&l=202301071305304236CB911F09452E4683&btag=80000'
                />
              </div>
              <div className=''>thả tym</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
