import React from 'react'
import { Link } from 'react-router-dom'

function MenuItem({ className, data, onClick }) {
  let Comp = 'div'
  const _props = {
    onClick
  }
  if (data.to) {
    _props.to = data.to
    Comp = Link
  }

  return (
    <Comp className={className} {..._props}>
      <span>{data.icon}</span>
      {data.title === 'Dark mode' || data.title === 'Chế độ tối' ? (
        <>
          <span>{data.title}</span>
          <label className='relative inline-flex cursor-pointer items-center'>
            <input type='checkbox' value='' className='peer sr-only' />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          </label>
        </>
      ) : (
        <span>{data.title}</span>
      )}
    </Comp>
  )
}

export default MenuItem
