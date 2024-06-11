import { createContext, useEffect, useState } from "react"
import supabaseClient from "../supabase-client/supabase-client"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [session, setSession] = useState(null)
    
  // * listen to auth state change with a Supabase method
  useEffect(() => {
    const subscription = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          setSession(null)
        } else if (session) {
          setSession(session)
        }
      })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      session,
      setSession
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}
