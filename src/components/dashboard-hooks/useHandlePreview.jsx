import usePreviewContext from '../../store/preview-context/usePreviewContext'
import useStylingContext from '../../store/styling-context/useStylingContext'
import useGetExistingSnippets from '../../utils/useGetExistingSnippets'

const useHandlePreview = () => {
  const {setSnippetPreview} = usePreviewContext()
  const {setPreviewOpenId} = useStylingContext()
  const {getExistingSnippets} = useGetExistingSnippets()

  const handlePreview = (snippetId) => {
    const findSnippet = getExistingSnippets().find(snippet => snippet.id === snippetId)

    setPreviewOpenId(snippetId)

    setSnippetPreview(prev => ({
      ...prev,
      id: snippetId,
      body: findSnippet.body
    }))
  }

  return {handlePreview}
}

export default useHandlePreview