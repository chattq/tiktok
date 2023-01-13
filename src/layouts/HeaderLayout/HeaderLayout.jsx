import React, { useState } from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import {
  faEllipsisVertical,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faQuestionCircle,
  faPaperPlane,
  faMessage,
  faUser,
  faCoins,
  faVideoCamera,
  faGear,
  faXmarkCircle,
  faSpinner,
  faTicket,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'
import { BlueTick, Messages, PaperPlane, tick } from '../../Icons/Icons'
import { User } from '../../apis/UserAPI'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'

export default function HeaderLayout({ children }) {
  const dataUser = JSON.parse(localStorage.getItem('userInfo'))
  const [resultSearch, setResultSearch] = useState([])
  const [search, setSearch] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [loadding, setLoading] = useState(false)
  const inputSearchRef = useRef()
  const handleSearch = () => {
    User.searchUser({ q: search, type: 'less' })
      .then((res) => {
        console.log(res)
        setResultSearch(res.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    User.searchUser({ q: search, type: 'less' })
      .then((res) => {
        console.log(res)
        setResultSearch(res.data.data)
        // setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {}
  }, [search])
  const handleHideResultSearch = useCallback(() => {
    setShowResult(false)
    console.log('clicked')
  })
  const handleClear = () => {
    inputSearchRef.current.focus()
    setResultSearch([])
    setSearch('')
  }
  const handlexoa = () => {
    window.removeEventListener('click', handleHideResultSearch)
    console.log('xoa')
  }

  return (
    <>
      <div className='h-[60px] w-full border-b border-[#ccc]'>
        <div className='m-auto flex h-full w-[1150px] items-center justify-between gap-[40px] '>
          <img src={logo} alt='' className='cursor-pointer' />

          <div
            className='relative flex h-[41px] w-[361px] rounded-full bg-[#f1f1f2] after:absolute after:top-[9px] after:right-[52px] after:ml-0.5 after:h-[18px] after:w-[1px] after:bg-[#b5b0b0] after:content-[""]'
            onMouseMove={handlexoa}
            onMouseLeave={() => window.addEventListener('click', handleHideResultSearch)}
            onClick={() => setShowResult(true)}
          >
            <input
              ref={inputSearchRef}
              value={search}
              className='h-full flex-1 rounded-full bg-[#f1f1f2] pl-4 text-[#707070] caret-red-500 outline-none'
              type='text'
              placeholder='Search account and video'
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowResult(true)}
            />
            {search && (
              <button className='text-[#707070]- absolute right-16 top-2/4 -translate-y-1/2' onClick={handleClear}>
                <FontAwesomeIcon icon={faXmarkCircle} className='text-slate-400' />
              </button>
            )}
            {/* {loadding && (
                <button className='absolute right-16 top-2/4 -translate-y-1/2 text-[#707070]'>
                  <FontAwesomeIcon icon={faSpinner} />
                </button>
              )} */}
            <button className='h-full w-[52px] text-[18px] text-[#b5b0b0]' onClick={handleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {showResult && resultSearch.length > 0 && (
              <div className='absolute top-[125%] z-10  w-full bg-white shadow-md'>
                {resultSearch.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className=' mb-2 flex cursor-pointer gap-2 bg-inherit py-[6px] px-4 hover:bg-[#ccc]'
                      onClick={() => console.log('click')}
                    >
                      <div className='h-[40px] w-[40px] overflow-hidden rounded-full'>
                        <img src={item.avatar} alt='' className='h-full w-full object-cover ' />
                      </div>
                      <div>
                        <div className=' whitespace-nowrap text-[16px] font-semibold'>
                          {item.nickname}
                          {item.tick && (
                            <span>
                              <FontAwesomeIcon icon={faCircleCheck} className='ml-1 text-[#20d5ec]' />
                            </span>
                          )}
                        </div>

                        <p className='textfontSizeTitle font-normal text-[#16182380]'>{item.last_name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className='flex gap-[16px] text-[#161823]'>
            <div className='flex h-[36px] min-w-[110px] cursor-pointer items-center rounded-sm border border-[#e3e3e4] px-[16px] transition-all hover:bg-[#f1f1f2]'>
              <FontAwesomeIcon icon={faPlus} className='mr-[8px] h-[16px] w-[16px]' />
              <span className='font-semibold leading-6 text-[#161823]'>Upload</span>
            </div>
            {dataUser ? (
              <div className='flex items-center gap-[20px] text-[#161823]'>
                <div className='cursor-pointer'>
                  <Tippy
                    interactive={true}
                    render={(attrs) => (
                      <div
                        className='w-full rounded-lg bg-[#545454eb] p-3 py-3 text-[#fff] shadow-lg'
                        tabIndex='-1'
                        {...attrs}
                      >
                        <p>Messages</p>
                      </div>
                    )}
                  >
                    <PaperPlane style={{ width: '26px', height: '26px' }} />
                  </Tippy>
                </div>
                <div className='cursor-pointer'>
                  <Tippy
                    interactive={true}
                    render={(attrs) => (
                      <div
                        className='w-full rounded-lg bg-[#545454eb] p-3 py-3 text-[#fff] shadow-lg'
                        tabIndex='-1'
                        {...attrs}
                      >
                        <p>Inbox</p>
                      </div>
                    )}
                  >
                    <Messages style={{ width: '32px', height: '32px' }} />
                  </Tippy>
                </div>
                <div className='flex cursor-pointer  items-center'>
                  <Tippy
                    interactive={true}
                    placement={'bottom-end'}
                    render={(attrs) => (
                      <div className='w-[240px] bg-[white] py-3 shadow-lg ' tabIndex='-1' {...attrs}>
                        <ul>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faUser} className='w-5' />
                            <span>View Profile</span>
                          </li>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faCoins} className='w-5' />
                            <span>Get Coin</span>
                          </li>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faVideoCamera} className='w-5' />
                            <span>Live</span>
                          </li>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faGear} className='w-5' />
                            <span>Setting</span>
                          </li>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faLanguage} className='w-5' />
                            <span>EngLish</span>
                          </li>
                          <li className=' mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faQuestionCircle} className='w-5' />
                            <span>Feed back and help</span>
                          </li>
                          <li className=' mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faMoon} className='w-5' />
                            <span>Dark mode</span>
                            <label className='relative inline-flex cursor-pointer items-center'>
                              <input type='checkbox' value='' className='peer sr-only' />
                              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    )}
                  >
                    <div>
                      <img
                        src={
                          dataUser.avatar ||
                          'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
                        }
                        alt=''
                        className='h-9 w-9 rounded-full'
                      />
                    </div>
                  </Tippy>
                </div>
              </div>
            ) : (
              <>
                <div className='flex h-[36px] min-w-[100px] cursor-pointer items-center justify-center rounded-md bg-[#FE2C55] px-[8px]  py-[6px] text-[white] hover:opacity-60'>
                  <span>Login</span>
                </div>
                <div className='flex cursor-pointer  items-center'>
                  <Tippy
                    interactive={true}
                    placement={'bottom-end'}
                    render={(attrs) => (
                      <div className='w-[240px] bg-[white] py-3 shadow-lg ' tabIndex='-1' {...attrs}>
                        <ul>
                          <li className=' mb-2 flex w-full  items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faLanguage} className='w-5' />
                            <span>EngLish</span>
                          </li>
                          <li className=' mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faQuestionCircle} className='w-5' />
                            <span>Feed back and help</span>
                          </li>
                          <li className=' mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <FontAwesomeIcon icon={faMoon} className='w-5' />
                            <span>Dark mode</span>
                            <label className='relative inline-flex cursor-pointer items-center'>
                              <input type='checkbox' value='' className='peer sr-only' />
                              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    )}
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </Tippy>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

//
