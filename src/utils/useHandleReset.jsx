import useSnippetContext from "../store/snippet-context/useSnippetContext"
import useInputContext from "../store/input-context/useInputContext"

const useHandleReset = () => {
  const {setInput} = useInputContext()
  const {setSelectedSnippet} = useSnippetContext()

  const handleReset = (boolean) => {
    boolean
      ? (
        setInput(prev => ({
          ...prev,
          body: '',
          caretPosition: 0
        }))
      )
      : (
        setSelectedSnippet(null),
        setInput(prev => ({
          ...prev,
          title: null
        }))
      )
    
  }

  return {handleReset}
}

export default useHandleReset
