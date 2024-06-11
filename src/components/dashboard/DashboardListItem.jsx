import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faRightToBracket, faPen, faEye } from "@fortawesome/free-solid-svg-icons"
import ButtonPrimary from "../buttons/ButtonPrimary"
import ButtonAccent from '../buttons/ButtonAccent'
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useLocalStorageContext from "../../store/localstorage-context/useLocalStorageContext"
import useHandleUse from "../dashboard-hooks/useHandleUse"
import useHandleRename from "../dashboard-hooks/useHandleRename"
import useHandleRemove from "../dashboard-hooks/useHandleRemove"
import useHandlePreview from "../dashboard-hooks/useHandlePreview"
import usePreviewContext from "../../store/preview-context/usePreviewContext"
import MarkdownPreview from '../markdown-preview/MarkdownPreview'

const DashboardListItem = ({snippet, snippetId, setSnippetId, showRenameControls, setShowRenameControls}) => {
  const {loading} = useLoadingContext()
  const {selectedSnippet} = useLocalStorageContext()
  const {handleUse} = useHandleUse()
  const {handlePreview} = useHandlePreview()
  const {snippetPreview} = usePreviewContext()

  const divRef = useRef()

  const {
    handleRename,
  } = useHandleRename({
    setSnippetId,
    setShowRenameControls
  })

  const {handleRemove} = useHandleRemove({
    setSnippetId
  })

  useEffect(() => {
    if (divRef.current && snippetPreview.id === snippet.id)
      divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <div className="flex flex-col w-full justify-center" ref={divRef}>
      <div className="flex flex-col md:flex-row md:min-h-[72px] gap-2 p-5 items-center w-full overflow-hidden">

        {/* snippet title */}
        <p className="flex justify-center w-full">
          {snippet.title}
        </p>

        {/* buttons */}
        <div className="flex flex-row-reverse items-center gap-3">
          {/* button remove */}
          <ButtonAccent
            // ! some buttons are disabled when 'selectedSnippet === snippet.id' condition is met because the 'selectedSnippet' persists after re-render. this is an edge case scenario: user navigates away from editor before amending changes, and attempts to delete or rename (by accident?) the snippet for which changes are pending. The interface is designed to let the user navigate away from the editor, and come back to continue where they left off.
            className={`btn-xs lg:btn-sm w-[50px] ${(loading && snippetId === snippet.id) || showRenameControls[snippetId] || selectedSnippet === snippet.id ? 'btn-disabled' : ''}`}
            onClick={() => handleRemove(snippet.id)}
          >
            <FontAwesomeIcon className="text-md lg:text-lg" icon={faTrash} />
          </ButtonAccent>
          {/* button rename */}
          <ButtonPrimary
            className={`btn-xs lg:btn-sm w-[50px] ${(loading && snippetId === snippet.id) || showRenameControls[snippetId] || selectedSnippet === snippet.id ? 'btn-disabled' : ''}`}
            onClick={() => handleRename(snippet.id)}
          >
            <FontAwesomeIcon className="text-md lg:text-lg" icon={faPen} />
          </ButtonPrimary>
          {/* button preview */}
          <ButtonPrimary
            className={`btn-xs lg:btn-sm w-[50px] ${snippetPreview.id === snippet.id ? '' : 'opacity-50'}`}
            onClick={() => handlePreview(snippet.id)}
          >
            <FontAwesomeIcon className="text-md lg:text-lg" icon={faEye} />
          </ButtonPrimary>
          {/* button use */}
          <ButtonPrimary
            className={`btn-xs lg:btn-sm w-[50px] ${(loading && snippetId === snippet.id) || showRenameControls[snippetId] ? 'btn-disabled' : ''}`}
            onClick={() => handleUse(snippet)}
          >
            <FontAwesomeIcon className="text-md lg:text-lg" icon={faRightToBracket} />
          </ButtonPrimary>

          {/* debugging buttons */}
          {/* <button className="btn btn-secondary flex flex-col items-center" onClick={() => {console.log(showRenameControls)}}>
            <span className="font-normal">print</span>
            <span className="font-bold">showRenameControls</span>
          </button> */}
        </div>
      </div>

      {/* snippet preview */}
      {snippetPreview.id === snippet.id &&
        <MarkdownPreview />
      }
    </div>
  )
}

export default DashboardListItem