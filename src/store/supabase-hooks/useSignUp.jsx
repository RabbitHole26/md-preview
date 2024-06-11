import { useNavigate } from 'react-router-dom'
import useLoadingContext from '../loading-context/useLoadingContext'
import supabaseClient from '../supabase-client/supabase-client'
import toast from 'react-hot-toast'

const useSignUp = () => {
  const navigate = useNavigate()
  const {setAuthLoading} = useLoadingContext()

  const handleSignUp = async (formData) => {

    setAuthLoading(true)
    try {
      // eslint-disable-next-line no-unused-vars
      const {data, error} = await supabaseClient.auth.signUp({
        email: formData.email.trim(),
        password: formData.password,
        options: {
          data: {
            displayName: formData.displayName.trim(),
            mdSnippets: []
          }
        }
      })
      
      if (error)
        throw new Error(error)

      setAuthLoading(false)
      toast.success(`You've signed up successfully!`, {duration: 3000}),
      navigate('/')
    } catch (error) {
      setAuthLoading(false)
      error.message === 'User already registered'
        ? toast.error(`You've already signed up.`)
        : (
          toast.error('Signup error occurred.'),
          // ! remove this console log before hosting the app
          console.log('Signup error:', error.message)
        )
    }
  }
  
  return {handleSignUp}
}

export default useSignUp