import useLoadingContext from '../loading-context/useLoadingContext'
import useInputContext from '../input-context/useInputContext'
import supabaseClient from '../supabase-client/supabase-client'
import toast from 'react-hot-toast'
import getLoadingState from './loading-state-map'
import getToastMessage from './toast-message-map'
import generateNewSnippet from './generate-new-snippet'
import defineUpdatedSnippets from './define-updated-snippets'
import useGetExistingSnippets from '../../utils/useGetExistingSnippets'

const useUpdateUserMetadata = () => {
  const {setLoading, setSyncLoading} = useLoadingContext()
  const {input} = useInputContext()
  const {getExistingSnippets} = useGetExistingSnippets()

  const updateUserMetadata = async (data, action) => {
    const existingSnippets = getExistingSnippets()
    let updatedSnippets = null
    let newSnippet = null
    let switchResult = null

    const {
      generateUpdatedSnippets, 
      logicModify, 
      logicRename
    } = defineUpdatedSnippets({
      existingSnippets, 
      data
    })

    switch (action) {
      case 'ADD_snippet':
        newSnippet = generateNewSnippet(data, input)
        switchResult = {data: {mdSnippets: [...existingSnippets, newSnippet]}}
        break
      case 'MODIFY_snippet':
        updatedSnippets = generateUpdatedSnippets(logicModify)
        switchResult = {data: {mdSnippets: [...updatedSnippets]}}
        break
      case 'RENAME_snippet':
        updatedSnippets = generateUpdatedSnippets(logicRename)
        switchResult = {data: {mdSnippets: [...updatedSnippets]}}
        break
      case 'REMOVE_snippet':
        switchResult = {data: {mdSnippets: existingSnippets.filter(snippet => data !== snippet.id)}}
        break
      case 'UPDATE_password':
        switchResult = {password: data}
        break
      case 'UPDATE_displayName':
        switchResult = {data: {displayName: data.newDisplayName.trim()}}
        break
      case 'USE_refreshSession':
        // * this case is used to refresh user session client-side by levraging 'updateUser' supabase method
        // * each time the method is called, the client-side user session is synced with server-side session
        // * object {syncSnippets:'syncValue'} contains arbitraty values, it can be anything
        switchResult = {data: {syncSnippets:'syncValue'}}
        break
    }

    const loadingState = getLoadingState(action, setLoading, setSyncLoading)
    const toastMessage = getToastMessage(action)

    // * update user metadata with Supabase method
    loadingState(true)
    try {
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabaseClient.auth.updateUser({
        ...switchResult
      })

      if (error)
        throw new Error(error)

      loadingState(false)
      toast.success(toastMessage, {duration: 1000})
    } catch (error) {
      loadingState(false)
      // ! this condition might be unreliable if error message was changed by Supabase
      error.message.toLowerCase().includes('new password should be different from the old password')
        ? toast.error('New password should be different from the old password.')
        : toast.error('Something went wrong.')
      // ! remove this console log before hosting the app
      console.log('Updating metadata error:', error.message)
    }
  }

  return {updateUserMetadata}
}

export default useUpdateUserMetadata
