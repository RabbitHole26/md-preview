import useInputContext from "../../store/input-context/useInputContext"
import useSnippetContext from '../../store/snippet-context/useSnippetContext'
import useUpdateUserMetadata from "../../hooks/supabase/useUpdateUserMetadata"
import useGetExistingSnippets from "../../hooks/useGetExistingSnippets"
import toast from "react-hot-toast"

const useOnSubmitMarkdownForm = ({reset}) => {
  const {updateUserMetadata} = useUpdateUserMetadata()
  const {getExistingSnippets} = useGetExistingSnippets()
  const {input} = useInputContext()
  const {selectedSnippet} = useSnippetContext()

  const updateUserMetadataAndCleanUp = (data, action) => {
    updateUserMetadata(data, action)
    reset()
  }

  // ! this 'onSubmit' function is used to create new snippets or update existing ones. hence the complexity.
  const onSubmit = (formData) => {
    const snippetTitle = formData.snippetTitle.trim()
    const existingSnippetMatchedByTitle = getExistingSnippets().find(snippet => snippet.title === snippetTitle)
  
    if (input.body.length === 0) {
      toast.error('Snippet cannot be empty.')
    } else if (snippetTitle === input.title && selectedSnippet) {
        // TODO: trimmed both for a good measure but I think that one of them might not need to be trimmed :)
        existingSnippetMatchedByTitle.body.trim() === input.body.trim()
          ? toast.error(`You haven't made any changes.`)
          : updateUserMetadataAndCleanUp(
            {id: selectedSnippet, body: input.body, caretPosition: input.caretPosition}, 
            'MODIFY_snippet'
            )
    } else if (existingSnippetMatchedByTitle) {
      toast.error(`You already have a snippet titled '${snippetTitle}'.`)
    } else {
      updateUserMetadataAndCleanUp(
        formData.snippetTitle,
        'ADD_snippet'
      )
    }

    return (
      <button onClick={() => {console.log(input)}}>print input</button>
    )
  }
  return {onSubmit}
}

export default useOnSubmitMarkdownForm