import usePreviewContext from '../../store/preview-context/usePreviewContext'
import useGetExistingSnippets from '../useGetExistingSnippets'

const useHandlePreview = () => {
  const {setSnippetPreview} = usePreviewContext()
  const {getExistingSnippets} = useGetExistingSnippets()

  const handlePreview = (snippetId) => {
    const findSnippet = getExistingSnippets().find(snippet => snippet.id === snippetId)

    setSnippetPreview(prev => ({
      ...prev,
      id: snippetId,
      body: findSnippet.body
    }))
  }

  return {handlePreview}
}

export default useHandlePreview