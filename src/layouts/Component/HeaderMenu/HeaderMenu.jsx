import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function HeaderMenu({ title, onBack }) {
  return (
    <header className='relative flex h-[50px] items-center'>
      <button className='absolute top-1/2 left-6' onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className='absolute  top-1/2 left-1/2 -translate-x-1/2 text-[16px] font-semibold'>{title}</h4>
    </header>
  )
}

export default HeaderMenu
