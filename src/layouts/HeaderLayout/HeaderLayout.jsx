import React from 'react'
import logo from '../../logoTiktok.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import {
  faEllipsisVertical,
  faLanguage,
  faMagnifyingGlass,
  faMoon,
  faMotorcycle,
  faPlus,
  faQuestionCircle,
  faSignLanguage
} from '@fortawesome/free-solid-svg-icons'

export default function HeaderLayout({ children }) {
  return (
    <div className='w-full border-b border-[#ccc] h-[60px]'>
      <div className='w-[1150px] h-full m-auto flex items-center justify-between gap-[40px] '>
        <img src={logo} alt="" />
        <div className='w-[361px] h-[41px] bg-[#f1f1f2] relative flex rounded-full after:content-[""] after:ml-0.5 after:bg-[#b5b0b0] after:w-[1px] after:h-[18px] after:absolute after:top-[9px] after:right-[52px] overflow-hidden'>
          <input className='h-full bg-[#f1f1f2] flex-1 pl-4 outline-none text-[#707070]' type="text" placeholder='Search account and video' />
          <button className='w-[52px] h-full text-[#b5b0b0] text-[18px]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className='flex text-[#161823] gap-[16px]'>
          <div className='flex items-center h-[36px] min-w-[110px] border border-[#e3e3e4] px-[16px] rounded-sm cursor-pointer hover:bg-[#f1f1f2] transition-all'>
            <FontAwesomeIcon icon={faPlus} className='w-[16px] h-[16px] mr-[8px]' />
            <span className='text-[#161823] font-semibold leading-6'>Upload</span>
          </div>
          <div className='flex h-[36px] min-w-[100px] cursor-pointer items-center justify-center rounded-md bg-[#FE2C55] px-[8px]  py-[6px] text-[white] hover:opacity-60'>
            <span>Login</span>
          </div>
          <div className='flex cursor-pointer  items-center'>
            <Tippy
              
              interactive={true}
              placement={'bottom-end'}
              render={(attrs) => (
                <div className='w-[240px] bg-[white] shadow-lg py-3 '  tabIndex="-1" {...attrs}>
                  <ul>
                    <li className=' text-base mb-2 flex  w-full items-center gap-4 px-4 py-1 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faLanguage} className='w-5' />
                      <span>EngLish</span>
                    </li>
                    <li className=' text-base mb-2  flex w-full items-center gap-4 px-4 py-1 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
                      <FontAwesomeIcon icon={faQuestionCircle} className='w-5' />
                      <span>Feed back and help</span>
                    </li>
                    <li className=' text-base mb-2  flex w-full items-center gap-4 px-4 py-1 font-sans font-medium transition-all hover:bg-[#f1f1f2]'>
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
        </div>
      </div>

      {children}
    </div>
  )
}
