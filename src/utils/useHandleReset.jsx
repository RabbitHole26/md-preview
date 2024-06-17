// import useLocalStorageContext from "../store/localstorage-context/useLocalStorageContext"
// import cleanUp from "../components/markdown-forms/cleanup"

// const useHandleReset = () => {
//   const {
//     setInput,
//     setSelectedSnippet
//   } = useLocalStorageContext()

//   const handleReset = (eraseInputBody) => {
//     eraseInputBody
//       ? (
//         setInput(prev => ({
//           ...prev,
//           body: '',
//           caretPosition: 0
//         }))
//       )
//       : (
//         cleanUp(setSelectedSnippet, null)
//       )
    
//   }

//   return {handleReset}
// }

// export default useHandleReset

import useLocalStorageContext from "../store/localstorage-context/useLocalStorageContext"
import useSnippetContext from "../store/snippet-context/useSnippetContext"
import cleanUp from "../components/markdown-forms/cleanup"

const useHandleReset = () => {
  const {setInput} = useLocalStorageContext()
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
