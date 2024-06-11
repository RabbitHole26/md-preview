import { useNavigate } from "react-router-dom"
import useLocalStorageContext from "../../store/localstorage-context/useLocalStorageContext"
import scrollToTop from "../../utils/scroll-to-top"

const useHandleUse = () => {
  const {setInput, setSelectedSnippet} = useLocalStorageContext()
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