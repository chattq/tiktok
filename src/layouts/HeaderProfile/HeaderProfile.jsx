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
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons'
import { LiveIcon } from '../../Icons/Icons'


function HeaderProfile({ children }) {
  return (
    <div className='w-full border-b border-[#ccc] h-[60px] px-4'>
      <div className='w-full h-full m-auto flex items-center justify-between gap-[40px] '>
        <img src={logo} alt="" className='cursor-pointer' />
        <div className='w-[361px] h-[41px] bg-[#f1f1f2] relative flex rounded-full after:content-[""] after:ml-0.5 after:bg-[#b5b0b0] after:w-[1px] after:h-[18px] after:absolute after:top-[9px] after:right-[52px] overflow-hidden'>
          <input className='h-full bg-[#f1f1f2] flex-1 pl-4 outline-none text-[#707070] caret-red-500' type="text" placeholder='Search account and video' />
          <button className='w-[52px] h-full text-[#b5b0b0] text-[18px]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='flex text-[#161823] gap-[20px] items-center'>
          <div className='flex items-center h-[36px] min-w-[110px] border border-[#e3e3e4] px-[16px] rounded-sm cursor-pointer hover:bg-[#f1f1f2] transition-all'>
            <FontAwesomeIcon icon={faPlus} className='w-[16px] h-[16px] mr-[8px]' />
            <span className='text-[#161823] font-semibold leading-6'>Upload</span>
          </div>
          <div className='cursor-pointer'>
            <Tippy
              interactive={true}
              render={(attrs) => (
                <div className='w-full p-3 bg-[#545454eb] text-[#fff] shadow-lg py-3 rounded-lg' tabIndex="-1" {...attrs}>
                  <p>Messages</p>
                </div>
              )}
            >
              <FontAwesomeIcon icon={faPaperPlane} className='w-[20px] h-[20px]' />
            </Tippy>
          </div>
          <div className='cursor-pointer'>
            <Tippy
              interactive={true}
              render={(attrs) => (
                <div className='w-full p-3 bg-[#545454eb] text-[#fff] shadow-lg py-3 rounded-lg' tabIndex="-1" {...attrs}>
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
                <div className='w-[240px] bg-[white] shadow-lg py-3 ' tabIndex="-1" {...attrs}>
                  <ul>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faUser} className='w-5' />
                      <span>View Profile</span>
                    </li>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faCoins} className='w-5' />
                      <span>Get Coin</span>
                    </li>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faVideoCamera} className='w-5' />
                      <span>Live</span>
                    </li>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faGear} className='w-5' />
                      <span>Setting</span>
                    </li>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faLanguage} className='w-5' />
                      <span>EngLish</span>
                    </li>
                    <li className=' text-base mb-2  flex w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faQuestionCircle} className='w-5' />
                      <span>Feed back and help</span>
                    </li>
                    <li className=' text-base mb-2  flex w-full items-center gap-4 px-4 py-3 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
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
                <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="" className='w-10 h-10 rounded-full' />
              </div>
            </Tippy>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default HeaderProfile