import { createContext, useState } from 'react'

const initialAppContext = {
  playing: false,
  muted: null,
  range: 0,
  dataUser: JSON.parse(localStorage.getItem('userInfo')),
  language: 'tiengviet'
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(initialAppContext.playing)
  const [numberMuted, setNumberMuted] = useState(initialAppContext.muted)
  const [numberRange, setNumberRange] = useState(initialAppContext.range)
  const [dataUser, setDataUser] = useState(initialAppContext.dataUser)
  const [language, setLanguage] = useState(initialAppContext.language)
  return (
    <AppContext.Provider
      value={{
        numberMuted,
        numberRange,
        dataUser,
        language,
        setLanguage,
        setDataUser,
        setNumberRange,
        setNumberMuted,
        isPlaying,
        setIsPlaying
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
