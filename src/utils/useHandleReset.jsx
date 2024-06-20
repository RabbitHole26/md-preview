import useSnippetContext from "../store/snippet-context/useSnippetContext"
import useInputContext from "../store/input-context/useInputContext"
import cleanUp from "../components/markdown-forms/cleanup"

const useHandleReset = () => {
  const {setInput} = useInputContext()
  const {setSelectedSnippet} = useSnippetContext()

  const handleReset = (eraseInputBody) => {
    eraseInputBody
      ? (
        setInput(prev => ({
          ...prev,
          body: '',
          caretPosition: 0
        }))
      )
      : (
        cleanUp(setSelectedSnippet, null)
      )
    
  }

  return {handleReset}
}

export default useHandleReset
