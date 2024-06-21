import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import useLoadingContext from "../loading-context/useLoadingContext"
import useSnippetContext from '../../store/snippet-context/useSnippetContext'
import supabaseClient from "../supabase-client/supabase-client"
import removeJwtToken from "./remove-jwt-token"

const useSignOut = () => {
  const navigate = useNavigate()
  const {setAuthLoading} = useLoadingContext()
  const {setSelectedSnippet} = useSnippetContext()

  const handleSignOut = async () => {

    setAuthLoading(true)
    try {
      // * removing JWT token manually to prevent auth errors across app instances
      // https://github.com/supabase/auth-helpers/issues/778
      removeJwtToken()
      // * clearing 'selectedSnippet' from the localstorage to prevent issues when a different user logs in
      // * 'selectedSnippet' reflects snippet id which is unique
      setSelectedSnippet(null)
      const { error } = await supabaseClient.auth.signOut()

      if (error)
        throw new Error(error)

      setAuthLoading(false)
      toast.success(`You've signed out.`)
      navigate('/login')

    } catch (error) {
      setAuthLoading(false)
      toast.error('Signout error occurred.')
      // ! remove this console log before hosting the app
      console.log('Signout error:', error.message)
    }
  }
  
  return {handleSignOut}
}

export default useSignOut