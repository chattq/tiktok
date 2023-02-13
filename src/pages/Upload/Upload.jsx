import React, { useState } from 'react'
import { useRef } from 'react'
import { Checked, Copyright } from '../../Icons/Icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'

function Upload() {
  const token = JSON.parse(localStorage.getItem('token'))
  const [checkedCopyRight, setCheckedCopyRight] = useState(false)
  const inputFileUpload = useRef()
  const [checkUpload, setCheckUpload] = useState(true)
  const textAreaRef = useRef()
  const [choseView, setChoseView] = useState('public')
  const [videoSrc, setVideoSrc] = useState(null)
  const inputCommentRef = useRef()
  const inputDuetRef = useRef()
  const inputStichRef = useRef()
  const [loaddingUpload, setLoadingUpload] = useState(false)
  const [fileVideos, setFileVideos] = useState()
  const [CaptionRequied, setCaptionRequied] = useState(false)

  let commentCheckbox = ''
  let duetCheckbox = ''
  let StitchCheckbox = ''
  const handleChangeComment = (e) => {
    if (e.target.checked) {
      commentCheckbox = e.target.value
    } else {
      commentCheckbox = ''
    }
  }
  const handleChangeDuet = (e) => {
    if (e.target.checked) {
      duetCheckbox = e.target.value
    } else {
      duetCheckbox = ''
    }
  }
  const handleChangeStitch = (e) => {
    if (e.target.checked) {
      StitchCheckbox = e.target.value
    } else {
      StitchCheckbox = ''
    }
  }
  const handleUpload = () => {
    inputFileUpload.current.click()
    setCheckUpload(false)
  }
  const handleUploadVideos = () => {
    if (textAreaRef.current.value) {
      setLoadingUpload(true)
      setCaptionRequied(false)
      console.log('click')
      var formData = new FormData()
      formData.append('upload_file', fileVideos)
      formData.append('description', textAreaRef.current.value)
      formData.append('thumbnail_time', '5')
      formData.append('viewable', choseView)
      if (commentCheckbox) {
        formData.append('allows[]', commentCheckbox)
      }
      if (duetCheckbox) {
        formData.append('allows[]', duetCheckbox)
      }
      if (StitchCheckbox) {
        formData.append('allows[]', StitchCheckbox)
      }
      axios
        .post('https://tiktok.fullstack.edu.vn/api/videos', formData, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token} `
          }
        })
        .then((res) => {
          console.log(res)
          setLoadingUpload(false)
          toast.success(
            <>
              <FontAwesomeIcon icon={faTiktok} />
              <span className='ml-[5px]'>Upload thành công</span>
            </>,
            {
              position: 'top-right',
              autoClose: 2000,
              theme: 'light'
            }
          )
        })
        .catch((error) => {
          console.log(error)
          setLoadingUpload(false)
          toast.error(
            <>
              <FontAwesomeIcon icon={faTiktok} />
              <span className='ml-[5px]'>Upload thất bại</span>
            </>,
            {
              position: 'top-right',
              autoClose: 2000,
              theme: 'light'
            }
          )
        })
    } else {
      setCaptionRequied(true)
    }
  }
  const handlePreviewVideoUpload = (e) => {
    const file = e.target.files[0]
    setFileVideos(file)
    const file_url = URL.createObjectURL(file)
    console.log(file_url)
    setVideoSrc(file_url)
  }
  const handleDiscardAll = () => {
    setCaptionRequied(false)
    setVideoSrc(null)
    setCheckUpload(true)
    setChoseView('public')
    textAreaRef.current.value = ''
    if (inputCommentRef.current.checked) {
      inputCommentRef.current.click()
    }
    if (inputDuetRef.current.checked) {
      inputDuetRef.current.click()
    }
    if (inputStichRef.current.checked) {
      inputStichRef.current.click()
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='relative  w-full pt-[60px]'>
        <div className='bg-[#f8f8f8] py-4'>
          <div className='my-0 mx-auto w-[1100px] rounded-md bg-[#ffffff] shadow-lg'>
            <div className='w-[1100px] px-10 py-6 '>
              <div>
                <h1 className='text-2xl font-bold leading-normal text-tiktokColorText'>Upload Video</h1>
                <p className='mt-[2px] text-lg font-normal text-[#16182380]'>Post a video to your account</p>
              </div>
              <div className='mt-6 mb-[130px] flex'>
                {videoSrc === null ? (
                  <div className='mt-6 '>
                    <div>
                      <input
                        className='hidden'
                        type='file'
                        accept='video'
                        ref={inputFileUpload}
                        onChange={handlePreviewVideoUpload}
                      />
                    </div>
                    <div className='flex h-[458px] w-[260px] cursor-pointer flex-col items-center justify-center rounded-lg border-[2px] border-dashed px-[35px] hover:border-[red]'>
                      <img
                        src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg'
                        alt=''
                        width='40px'
                        height='29px'
                      />
                      <p className='mt-6 text-lg font-semibold text-tiktokColorText'>Select video to upload</p>
                      <p className='mt-1 mb-6 text-sm font-normal text-[#161823bf]'>Or drag and drop a file</p>
                      <div className='text-center font-sans'>
                        <p className='mb-[6px] text-sm font-normal text-[#161823bf]'>MP4 or WebM</p>
                        <p className='mb-[6px] text-sm font-normal text-[#161823bf]'>720x1280 resolution or higher</p>
                        <p className='mb-[6px] text-sm font-normal text-[#161823bf]'>Up to 30 minutes</p>
                        <p className='mb-[6px] text-sm font-normal text-[#161823bf]'>Less than 2GB</p>
                      </div>
                      <div className='mt-[32px] w-full'>
                        <button
                          className='h-[36px] w-full rounded-sm bg-tiktokPink text-[white] hover:bg-[#EA284E]'
                          onClick={handleUpload}
                        >
                          Select file
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='relative h-[587px] w-[284px]'>
                    <div className=" absolute top-0 left-0  h-full w-full bg-[url('/download.png')] bg-cover ">
                      <video
                        muted
                        controls
                        src={videoSrc}
                        className='absolute top-[10.5px] right-[12.5px] left-[12.5px] h-[518.5px] w-[255px] overflow-hidden  rounded-t-[27.5px] object-cover'
                      ></video>
                    </div>
                    <div className="absolute top-[529px] right-2 m-auto h-[34px] w-[259px] bg-[url('/tiktokbar.png')] bg-cover"></div>
                  </div>
                )}
                <div className='ml-6 flex-1'>
                  <div className='relative mb-6 h-[104px] rounded-sm bg-[#16182308]'>
                    <div className='absolute top-4 left-6 flex w-[496px] flex-row items-start gap-3 '>
                      <div className='flex h-6 w-6 items-center'>
                        <img
                          src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg'
                          alt=''
                          width='22px'
                          height='18px'
                        />
                      </div>
                      <div>
                        <h2 className='text-base font-semibold leading-6 '>Divide videos and edit</h2>
                        <p className='text-sm font-normal text-[#161823bf] opacity-75'>
                          You can quickly divide videos into multiple parts, remove redundant parts and turn landscape
                          videos into portrait videos
                        </p>
                      </div>
                    </div>
                    <div className=' absolute top-[34px] right-6'>
                      <button className='h-[36px] min-w-[96px] rounded-sm bg-tiktokPink text-white hover:bg-[#EA284E]'>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className='flex justify-between'>
                    <h3 className='text-base font-semibold text-tiktokColorText'>Caption</h3>
                    <p className='text-[13px] font-normal text-[#16182380]'>
                      {textAreaRef.current?.value.length ? textAreaRef.current?.value.length   : 0}/150
                    </p>
                  </div>
                  <div className='relative min-h-[46px] w-full'>
                    <textarea
                      className='w-full overflow-hidden border py-3 pl-3 pr-20 outline-none'
                      maxLength='150'
                      ref={textAreaRef}
                    ></textarea>
                    <div className='absolute top-3 right-10 flex'>
                      <img
                        src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/at.062a03e9.svg'
                        alt=''
                      />
                      <img
                        src='https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg'
                        alt=''
                      />
                    </div>
                    {CaptionRequied && (
                      <p className='text-fontSizeTitle text-tiktokPink'>Vui lòng nhập Caption cho video của bạn</p>
                    )}
                  </div>
                  <div className='mt-6'>
                    <div className='text-base font-semibold text-tiktokColorText'>Cover</div>
                    <div className='border p-2'>
                      <div className='h-[150px] w-[85px] bg-[#f8f8f8]'></div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <div className='flex flex-col'>
                      <label htmlFor='choseview' className='mb-2 text-base font-semibold text-tiktokColorText'>
                        Who can watch this video
                      </label>
                      <select
                        value={choseView}
                        name=''
                        id='choseview'
                        className='h-9 w-[300px] rounded border outline-none'
                        onChange={(e) => setChoseView(e.target.value)}
                      >
                        <option value='public'>Followers</option>
                        <option value='friends '>Friends</option>
                        <option value='private'>Privite</option>
                      </select>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <p className=': mb-2 text-base font-semibold text-tiktokColorText'>Allow users to:</p>
                    <div className='flex gap-8'>
                      <div className=''>
                        <div className='relative flex items-center gap-3'>
                          <input
                            type='checkbox'
                            name='status'
                            id='comment'
                            className='peer/comment h-4 w-4 appearance-none  border checked:bg-tiktokPink'
                            value={'comment'}
                            onChange={handleChangeComment}
                            ref={inputCommentRef}
                          />
                          <label htmlFor='comment' className=''>
                            Comment
                          </label>
                          <div className='absolute left-[1.5px]  hidden peer-checked/comment:block'>
                            <Checked style={{ color: 'white' }} />
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className='relative flex items-center gap-3'>
                          <input
                            type='checkbox'
                            name='status'
                            id='duet'
                            className='peer/duet h-4 w-4 appearance-none  border checked:bg-tiktokPink'
                            onChange={handleChangeDuet}
                            value='duet'
                            ref={inputDuetRef}
                          />
                          <label htmlFor='duet' className=''>
                            Duet
                          </label>
                          <div className='absolute left-[1.5px]  hidden peer-checked/duet:block'>
                            <Checked style={{ color: 'white' }} />
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className='relative flex items-center gap-3'>
                          <input
                            type='checkbox'
                            name='status'
                            id='Stitch'
                            className='peer/Stitch h-4 w-4 appearance-none  border checked:bg-tiktokPink'
                            onChange={handleChangeStitch}
                            value={'stitch'}
                            ref={inputStichRef}
                          />
                          <label htmlFor='Stitch' className=''>
                            Stitch
                          </label>
                          <div className='absolute left-[1.5px]  hidden peer-checked/Stitch:block'>
                            <Checked style={{ color: 'white' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <div>
                      <div className='flex gap-4'>
                        <h2 className='mb-2 text-base font-semibold text-tiktokColorText'>Run a copyright check</h2>
                        <div>
                          <label className='relative cursor-pointer items-center'>
                            <input
                              type='checkbox'
                              value=''
                              className='peer sr-only'
                              id='checkcontent'
                              onChange={(e) => setCheckedCopyRight(!checkedCopyRight)}
                            />
                            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0BE09B] peer-checked:after:translate-x-full "></div>
                          </label>
                        </div>
                      </div>
                      <div>
                        {checkedCopyRight ? (
                          <div className='flex items-center gap-1 rounded bg-[#f1f1f2] px-3 py-2 text-fontSizeTitle leading-normal text-[#161823bf]'>
                            <Copyright />
                            <p>Copyright check will not begin until your video is uploaded.</p>
                          </div>
                        ) : (
                          <p className='text-fontSizeMin font-normal leading-normal text-[#161823bf]'>
                            We'll check your video for potential copyright infringements on used sounds. If
                            infringements are found, you can edit the video before posting.
                            <span className='font-semibold'>Learn More</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <button
                      className='mr-2 h-12 w-[164px] min-w-[96px] border bg-white px-[23px] font-medium hover:bg-[#f5f5f5]'
                      onClick={handleDiscardAll}
                    >
                      Discard
                    </button>
                    <button
                      className='mr-2 h-12 w-[164px] min-w-[96px] border bg-white px-[23px] font-medium disabled:cursor-not-allowed disabled:bg-[#EBEBEB] '
                      onClick={handleUploadVideos}
                      disabled={checkUpload}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' bg-black pb-3'>
          <div className='relative flex pt-10 pl-[378px]'>
            <div className='absolute left-[144px] top-[43px] flex gap-[6px]'>
              <img
                src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg'
                alt=''
              />
              <img
                src='https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg'
                alt=''
              />
            </div>
            <div className='flex max-w-[226px] flex-1 flex-col gap-2'>
              <p className='font-medium text-white'>Company</p>
              <a href='' className=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  About
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Newsroom
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Contact
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Careers
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  ByteDance
                </h2>
              </a>
            </div>
            <div className='flex max-w-[226px] flex-1 flex-col gap-2'>
              <p className='font-medium text-white'>Programs</p>
              <a href='' className=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  TikTok for Good
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Advertise
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Developers
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  TikTok Rewards
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  TikTok Browse
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  TikTok Embeds
                </h2>
              </a>
            </div>
            <div className='flex max-w-[226px] flex-1 flex-col gap-2'>
              <p className='font-medium text-white'>Support</p>
              <a href='' className=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Help Center
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Safety Center
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Creator Portal
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Community Guidelines
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Transparency
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Accessibility
                </h2>
              </a>
            </div>
            <div className='flex max-w-[226px] flex-1  flex-col gap-2'>
              <p className='font-medium text-white'>Legal</p>
              <a href='' className=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Terms of Use
                </h2>
              </a>
              <a href=''>
                <h2 className=' inline text-fontSizeTitle font-medium text-[#CCCCBF] hover:border-b-2 hover:border-[#CCCCBF] hover:pb-[2px]'>
                  Privacy Policy
                </h2>
              </a>
            </div>
          </div>
          <div className='mt-[60px] flex justify-between px-[144px] py-0'>
            <select
              name=''
              id=''
              className='h-[36px] w-[172px] rounded-sm border border-[#8a8b91] bg-black text-white outline-none'
            >
              <option value=''>Tiếng Việt</option>
              <option value=''>English</option>
              <option value=''>Franksc</option>
            </select>
            <p className='text-fontSizeTitle font-medium text-[#CCCCBF]'>© 2023 TikTok</p>
          </div>
        </div>
        {loaddingUpload && (
          <div
            role='status'
            className='fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded bg-tiktokPink px-3 py-4 text-white opacity-70'
          >
            <svg
              aria-hidden='true'
              class='mr-2 h-5 w-5 animate-spin fill-tiktokPink text-gray-200 dark:text-gray-600'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <p>Uploading</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Upload
