import { useState } from "react"
import { createContext } from "react"

const LoadingContext = createContext()

const LoadingProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [syncLoading, setSyncLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{
      loading, 
      setLoading,
      authLoading,
      setAuthLoading,
      syncLoading,
      setSyncLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}

export {LoadingContext, LoadingProvider}
