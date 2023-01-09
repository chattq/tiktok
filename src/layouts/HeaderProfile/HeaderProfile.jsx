import React from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import {
  faCamera,
  faCoins,
  faEllipsisVertical,
  faGear,
  faLanguage,
  faMagnifyingGlass,
  faMessage,
  faMoon,
  faPaperPlane,
  faPlus,
  faQuestionCircle,
  faUser,
  faVideoCamera
} from '@fortawesome/free-solid-svg-icons'
import { LiveIcon } from '../../Icons/Icons'

function HeaderProfile({ children }) {
  return (
    <>
      <div className='h-[60px] w-full border-b border-[#ccc] px-4'>
        <div className='m-auto flex h-full w-full items-center justify-between gap-[40px] '>
          <img src={logo} alt='' className='cursor-pointer' />
          <div className='relative flex h-[41px] w-[361px] overflow-hidden rounded-full bg-[#f1f1f2] after:absolute after:top-[9px] after:right-[52px] after:ml-0.5 after:h-[18px] after:w-[1px] after:bg-[#b5b0b0] after:content-[""]'>
            <input
              className='h-full flex-1 bg-[#f1f1f2] pl-4 text-[#707070] caret-red-500 outline-none'
              type='text'
              placeholder='Search account and video'
            />
            <button className='h-full w-[52px] text-[18px] text-[#b5b0b0]'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className='flex items-center gap-[20px] text-[#161823]'>
            <div className='flex h-[36px] min-w-[110px] cursor-pointer items-center rounded-sm border border-[#e3e3e4] px-[16px] transition-all hover:bg-[#f1f1f2]'>
              <FontAwesomeIcon icon={faPlus} className='mr-[8px] h-[16px] w-[16px]' />
              <span className='font-semibold leading-6 text-[#161823]'>Upload</span>
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
                    <p>Messages</p>
                  </div>
                )}
              >
                <FontAwesomeIcon icon={faPaperPlane} className='h-[20px] w-[20px]' />
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
                <FontAwesomeIcon icon={faMessage} className='text-[20px]' />
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
                    src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
                    alt=''
                    className='h-10 w-10 rounded-full'
                  />
                </div>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default HeaderProfile
