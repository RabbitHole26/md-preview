import { useNavigate } from "react-router-dom"
import useLoadingContext from "../loading-context/useLoadingContext"
import supabaseClient from "../supabase-client/supabase-client"
import toast from 'react-hot-toast'

const useSignIn = () => {
  const navigate = useNavigate()
  const {setAuthLoading} = useLoadingContext()

  const handleLogin = async (formData) => {

    setAuthLoading(true)
    try {
      // eslint-disable-next-line no-unused-vars
      const {data, error} = await supabaseClient.auth.signInWithPassword({
        email: formData.email.trim(),
        password: formData.password
      })

      if (error)
        throw new Error(error)

      setAuthLoading(false)
      toast.success(`You've logged in successfully`, {duration: 3000}),
      navigate('/dashboard')
    } catch (error) {
      setAuthLoading(false)
      error.message.toLowerCase().includes('invalid login credentials')
        ? toast.error('Invalid login credentials.')
        : (
          toast.error('Login error occurred.'),
          // ! remove this console log before hosting the app
          console.log('Login error:', error.message)
        )
    }
  }
  
  return {handleLogin}
}

export default useSignIn
