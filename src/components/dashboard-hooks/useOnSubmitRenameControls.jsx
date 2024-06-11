import useUpdateUserMetadata from "../../store/supabase-hooks/useUpdateUserMetadata"
import useGetExistingSnippets from "../../utils/useGetExistingSnippets"
import toast from "react-hot-toast"

const useOnSubmitRenameControls = ({
  reset, 
  setShowRenameControls, 
  snippetId
}) => {
  const {getExistingSnippets} = useGetExistingSnippets()
  const {updateUserMetadata} = useUpdateUserMetadata()

  const onSubmit = async (formData) => {
    const snippetTitle = formData.newSnippetTitle.trim()
    const existingSnippetMatchedByTitle = getExistingSnippets().find(snippet => (
      snippet.title === snippetTitle.toLowerCase()
    ))

    // ! input field rules validation is done here instead of using 'InputStyled' inbuilt validation rules and error display paragraph
    // ! reason for this is to display the error message in a toast instead of using the default mechanism
    existingSnippetMatchedByTitle
      ? toast.error(`Title '${snippetTitle.toLowerCase()}' is already taken.`)
      : snippetTitle.length === 0
        ? toast.error('Snippet title is required.')
        : snippetTitle.length > 24
          ? toast.error(`Maximum 24 characters. Currently, there are ${snippetTitle.length} characters`)
          : (
            await updateUserMetadata(
              {id:snippetId, title:snippetTitle},
              'RENAME_snippet'
            ),
            reset(),
            setShowRenameControls(prev => (
              {...prev, [snippetId]: false}
            ))
          )
  }

  return {onSubmit}
}

export default useOnSubmitRenameControls