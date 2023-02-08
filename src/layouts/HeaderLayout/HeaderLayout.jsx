import React, { useState } from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import {
  faMagnifyingGlass,
  faPlus,
  faUser,
  faCoins,
  faVideoCamera,
  faGear,
  faXmarkCircle,
  faSpinner,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'
import {
  BlueTick,
  KeyBroad,
  Language,
  LogoutIcon,
  MenuIcon,
  Messages,
  Moon,
  PaperPlane,
  Question,
  tick
} from '../../Icons/Icons'
import { User } from '../../apis/UserAPI'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import useDebounce from '../../Hook/useDebounce'
import Menu from '../Component/Menu/Menu'
import { Link, useParams } from 'react-router-dom'
import { Account } from '../../apis/AcountAPI'
import { ImgBasic } from '../../assets/img'

export default function HeaderLayout({ children }) {
  const { userId, upload } = useParams()
  const checkParams = Boolean(userId)
  const checkParamsUpload = Boolean(upload)
  const dataUser = JSON.parse(localStorage.getItem('userInfo'))
  const [resultSearch, setResultSearch] = useState([])
  const [search, setSearch] = useState('')
  const [showResult, setShowResult] = useState(true)
  const [loadding, setLoading] = useState(false)
  const inputSearchRef = useRef()
  const debouncedValue = useDebounce(search, 800)
  const dataMenu = [
    {
      icon: <Language style={{ width: '20px', height: '20px' }} />,
      title: 'EngLish',
      child: {
        title: 'Language',
        data: [
          {
            code: 'en',
            title: 'English'
          },
          {
            code: 'vi',
            title: 'Tiếng Việt'
          },
          {
            code: 'fr',
            title: 'Français'
          }
        ]
      }
    },
    {
      icon: <Question style={{ width: '20px', height: '20px' }} />,
      title: 'Feed back and help',
      to: '/feedback'
    },
    {
      icon: <KeyBroad style={{ width: '20px', height: '20px' }} />,
      title: 'Keyboard shortcuts'
    },
    {
      icon: <Moon style={{ width: '20px', height: '20px' }} />,
      title: 'Dark mode'
    }
  ]
  const dataMenuUser = [
    {
      icon: <FontAwesomeIcon icon={faUser} className='w-5' />,
      title: 'View Profile'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} className='w-5' />,
      title: 'Get Coin'
    },
    {
      icon: <FontAwesomeIcon icon={faVideoCamera} className='w-5' />,
      title: 'Live'
    },
    {
      icon: <FontAwesomeIcon icon={faGear} className='w-5' />,
      title: 'Settings'
    },
    {
      icon: <Language style={{ width: '20px', height: '20px' }} />,
      title: 'EngLish',
      child: {
        title: 'Language',
        data: [
          {
            code: 'en',
            title: 'English'
          },
          {
            code: 'vi',
            title: 'Tiếng Việt'
          },
          {
            code: 'fr',
            title: 'Français'
          }
        ]
      }
    },
    {
      icon: <Question style={{ width: '20px', height: '20px' }} />,
      title: 'Feed back and help',
      to: '/feedback'
    },
    {
      icon: <KeyBroad style={{ width: '20px', height: '20px' }} />,
      title: 'Keyboard shortcuts'
    },
    {
      icon: <Moon style={{ width: '20px', height: '20px' }} />,
      title: 'Dark mode'
    },
    {
      icon: <LogoutIcon style={{ width: '20px', height: '20px' }} />,
      title: 'Log out',
      log: 'logout'
    }
  ]

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
    if (!debouncedValue.trim()) {
      setResultSearch([])
      return
    }
    setLoading(true)
    User.searchUser({ q: debouncedValue, type: 'less' })
      .then((res) => {
        console.log(res)
        setResultSearch(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

    return () => {}
  }, [debouncedValue])

  const handleHideResultSearch = useCallback(() => {
    setShowResult(false)
  })
  const handleClear = () => {
    inputSearchRef.current.focus()
    setResultSearch([])
    setSearch('')
  }
  const handleLogout = () => {
    Account.getLogout()
      .then((res) => {
        console.log(res)
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        window.location.assign('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className='fixed z-50 h-[60px] w-full border-b border-[#ccc] bg-white'>
        <div
          className={
            checkParams || checkParamsUpload
              ? 'm-auto flex h-full w-full items-center justify-between gap-[40px] px-4  '
              : 'm-auto flex h-full w-[1150px] items-center justify-between gap-[40px]  '
          }
        >
          <Link to={'/'}>
            <img src={logo} alt='' className='cursor-pointer' />
          </Link>

          <Tippy
            interactive
            onClickOutside={handleHideResultSearch}
            appendTo={() => document.body}
            visible={showResult && resultSearch.length > 1}
            render={(attrs) => (
              <div className='z-10  w-[361px] bg-white shadow-md'>
                {resultSearch.map((item, index) => {
                  return (
                    <Link
                      to={`/users/@${item.nickname}`}
                      key={item.id}
                      className=' mb-2 flex cursor-pointer gap-2 bg-inherit py-[6px] px-4 hover:bg-[#ccc]'
                    >
                      <div className='h-[40px] w-[40px] overflow-hidden rounded-full'>
                        <img src={ImgBasic(item.avatar)} alt='' className='h-full w-full object-cover ' />
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
                    </Link>
                  )
                })}
              </div>
            )}
          >
            <div className='relative flex h-[41px] w-[361px] rounded-full bg-[#f1f1f2] after:absolute after:top-[9px] after:right-[52px] after:ml-0.5 after:h-[18px] after:w-[1px] after:bg-[#b5b0b0] after:content-[""]'>
              <input
                ref={inputSearchRef}
                value={search}
                className='h-full flex-1 rounded-full bg-[#f1f1f2] pl-4 text-[#707070] caret-red-500 outline-none'
                type='text'
                placeholder='Search account and video'
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowResult(true)}
              />
              {search && !loadding && (
                <button className='text-[#707070]- absolute right-16 top-2/4 -translate-y-1/2' onClick={handleClear}>
                  <FontAwesomeIcon icon={faXmarkCircle} className='text-slate-400' />
                </button>
              )}
              {loadding && (
                <button className='absolute right-16 top-2/4 -translate-y-1/2 text-[#707070]'>
                  <FontAwesomeIcon icon={faSpinner} className='animate-spin' />
                </button>
              )}
              <button className='h-full w-[52px] text-[18px] text-[#b5b0b0]' onClick={handleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>

          <div className='flex gap-[16px] text-[#161823]'>
            <Link
              className='flex h-[36px] min-w-[110px] cursor-pointer items-center rounded-sm border border-[#e3e3e4] px-[16px] transition-all hover:bg-[#f1f1f2]'
              to={'/upload'}
            >
              <FontAwesomeIcon icon={faPlus} className='mr-[8px] h-[16px] w-[16px]' />
              <span className='font-semibold leading-6 text-[#161823]'>Upload</span>
            </Link>
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
                  <Menu className='w-[240px] bg-[white] pt-3 shadow-lg ' dataMenu={dataMenuUser} onClick={handleLogout}>
                    <Link to={`/users/@${dataUser.nickname}`}>
                      <img
                        src={
                          ImgBasic(dataUser.avatar) ||
                          'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
                        }
                        alt=''
                        className='h-9 w-9 rounded-full'
                      />
                    </Link>
                  </Menu>
                  {/* <Tippy
                    interactive={true}
                    placement={'bottom-end'}
                    render={(attrs) => (
                      <div className='w-[240px] bg-[white] pt-3 shadow-lg ' tabIndex='-1' {...attrs}>
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
                            <Language style={{ height: '20px', width: '20px' }} />
                            <span>EngLish</span>
                          </li>
                          <li className=' mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <Question style={{ height: '20px', width: '20px' }} />
                            <span>Feed back and help</span>
                          </li>
                          <li className=' flex  w-full items-center gap-4 px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'>
                            <Moon style={{ height: '20px', width: '20px' }} />
                            <span>Dark mode</span>
                            <label className='relative inline-flex cursor-pointer items-center'>
                              <input type='checkbox' value='' className='peer sr-only' />
                              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            </label>
                          </li>
                          <li
                            className=' mb-2 flex  w-full items-center gap-4 border-t px-4 py-3 font-sans text-base font-medium transition-all hover:bg-[#f1f1f2]'
                            onClick={handleLogout}
                          >
                            <LogoutIcon style={{ width: '20px', height: '20px' }} />
                            <span>Log out</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  >
                    <Link to={`/users/@${dataUser.nickname}`}>
                      <img
                        src={
                          ImgBasic(dataUser.avatar) ||
                          'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
                        }
                        alt=''
                        className='h-9 w-9 rounded-full'
                      />
                    </Link>
                  </Tippy> */}
                </div>
              </div>
            ) : (
              <>
                <Link
                  className='flex h-[36px] min-w-[100px] cursor-pointer items-center justify-center rounded-md bg-[#FE2C55] px-[8px]  py-[6px] text-[white] hover:bg-[#EA284E]'
                  to={'/login'}
                >
                  <span>Login</span>
                </Link>
                <div className='flex cursor-pointer items-center'>
                  <Menu className='w-[240px] rounded-lg bg-[white] py-3 shadow-lg' dataMenu={dataMenu}>
                    <MenuIcon style={{ width: '20px', height: '20px' }} />
                  </Menu>
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
