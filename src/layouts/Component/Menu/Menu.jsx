import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import { faLanguage, faMoon, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function Menu({ children, dataMenu, className }) {
  return (
    <div>
      <Tippy
        interactive={true}
        placement={'bottom-end'}
        offset={[30, 20]}
        render={(attrs) => (
          <div className={className} tabIndex='-1' {...attrs}>
            {dataMenu?.map((item, index) => {
              return (
                <div
                  className=' mb-2 flex w-full items-center gap-4 px-4 py-3 font-sans text-base font-semibold transition-all hover:bg-[#f1f1f2]'
                  key={index}
                >
                  {item.icon}
                  {item.title === 'Dark mode' ? (
                    <>
                      <span>{item.title}</span>
                      <label className='relative inline-flex cursor-pointer items-center'>
                        <input type='checkbox' value='' className='peer sr-only' />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                      </label>
                    </>
                  ) : (
                    <span>{item.title}</span>
                  )}
                </div>
              )
            })}
            {/* <ul>
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
            </ul> */}
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  )
}

export default Menu
