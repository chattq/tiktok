import { createContext, useState } from 'react'

const initialAppContext = {
  dataUserSideBar: undefined
}
export const AppContext = createContext(initialAppContext)

export const AppProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState(initialAppContext.dataUserSideBar)

  return (
    <AppContext.Provider
      value={{
        dataUser,
        setDataUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
