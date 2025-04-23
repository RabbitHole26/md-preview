import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useSnippetContext from '../../store/snippet-context/useSnippetContext'
import useVisibilityContext from "../../store/visibility-context/useVisibilityContext"
import supabaseClient from "../../store/supabase-client/supabase-client"

const useSignOut = () => {
  const navigate = useNavigate()
  const {setAuthLoading} = useLoadingContext()
  const {setSelectedSnippet} = useSnippetContext()
  const {setSingOutPromptVisible} = useVisibilityContext()

  const handleSignOut = async () => {
    setAuthLoading(true)
    try {
      const { error } = await supabaseClient.auth.signOut({scope: 'local'})

      if (error)
        throw new Error(error)

      // * clearing 'selectedSnippet' from the localstorage to prevent issues when a different user logs in
      // * 'selectedSnippet' reflects snippet id which is unique
      setSelectedSnippet(null)
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

  const triggerSignOutPrompt = () => {
    setSingOutPromptVisible(prev => ({
      ...prev,
      visible: true
    }))
  }
  
  return {handleSignOut, triggerSignOutPrompt}
}

export default useSignOut