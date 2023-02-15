import React, { useContext } from 'react'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import MenuItem from '../MenuItem/MenuItem'
import { useState } from 'react'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import { useTranslation } from 'react-i18next'

function Menu({ children, dataMenu, className, onClick }) {
  const [history, setHistory] = useState([{ data: dataMenu }])
  const current = history[history.length - 1]
  const onBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1))
  }
  const { i18n } = useTranslation()
  const handeChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const renderItem = () => {
    return current.data?.map((item, index) => {
      const isParent = !!item.child
      const isLogOut = !!item.log
      return (
        <MenuItem
          key={index}
          data={item}
          className={
            ' mb-2 flex w-full items-center gap-4 px-4 py-3 font-sans text-base font-semibold transition-all hover:bg-[#f1f1f2] '
          }
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.child])
            }
            if (isLogOut) {
              onClick()
            }
            if (item.code === 'en') {
              handeChangeLanguage('en')
            }
            if (item.code === 'vi') {
              handeChangeLanguage('vi')
            }
          }}
        />
      )
    })
  }
  return (
    <div>
      <Tippy
        interactive={true}
        delay={[0, 500]}
        placement={'bottom-end'}
        offset={[30, 20]}
        render={(attrs) => (
          <div className={className} tabIndex='-1' {...attrs}>
            {history.length > 1 && <HeaderMenu title={'Language'} onBack={onBack} />}
            {renderItem()}
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  )
}

export default Menu
