import { createContext, useState } from 'react'

const initialAppContext = {
  playing: false,
  muted: null,
  range: 0
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(initialAppContext.playing)
  const [numberMuted, setNumberMuted] = useState(initialAppContext.muted)
  const [numberRange, setNumberRange] = useState(initialAppContext.range)
  return (
    <AppContext.Provider
      value={{
        numberMuted,
        numberRange,
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
