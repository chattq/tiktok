import { createContext, useState } from 'react'

const initialAppContext = {
  checkFollow: false
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [follow, setFollow] = useState(initialAppContext.checkFollow)
  return (
    <AppContext.Provider
      value={{
        follow,
        setFollow
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
