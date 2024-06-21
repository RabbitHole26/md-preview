import { useNavigate } from "react-router-dom"
import useSnippetContext from '../../store/snippet-context/useSnippetContext'
import useInputContext from "../../store/input-context/useInputContext"
import scrollToTop from "../../utils/scroll-to-top"

const useHandleUse = () => {
  const {setInput} = useInputContext()
  const {setSelectedSnippet} = useSnippetContext()
  const navigate = useNavigate()

  const handleUse = (snippet) => {
    setInput({
      title: snippet.title,
      body: snippet.body,
      caretPosition: snippet.caretPosition
    })
    setSelectedSnippet(snippet.id)
    navigate('/')
    scrollToTop()
  }

  return {handleUse}
}

export default useHandleUse