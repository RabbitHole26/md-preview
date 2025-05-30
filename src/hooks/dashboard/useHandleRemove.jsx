import useUpdateUserMetadata from "../supabase/useUpdateUserMetadata"

const useHandleRemove = ({setSnippetId}) => {
  const {updateUserMetadata} = useUpdateUserMetadata()

  const handleRemove = (snippetId) => {
    updateUserMetadata(snippetId, 'REMOVE_snippet')
    setSnippetId(snippetId)
  }

  return {handleRemove}
}

export default useHandleRemove
