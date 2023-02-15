import { createContext, useState } from 'react'

const initialAppContext = {
  playing: false,
  dataUser: JSON.parse(localStorage.getItem('userInfo')),
  language: 'tiengviet',
  volume: 0
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(initialAppContext.playing)
  const [dataUser, setDataUser] = useState(initialAppContext.dataUser)
  const [language, setLanguage] = useState(initialAppContext.language)
  const [volume, setVolume] = useState(initialAppContext.volume)
  return (
    <AppContext.Provider
      value={{
        volume,
        setVolume,
        dataUser,
        language,
        setLanguage,
        setDataUser,
        isPlaying,
        setIsPlaying
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
