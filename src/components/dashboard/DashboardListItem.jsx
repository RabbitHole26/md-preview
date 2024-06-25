import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faRightToBracket, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { light } from "../../store/theme-context/theme-aliases-map";
import useLoadingContext from "../../store/loading-context/useLoadingContext";
import useThemeContext from "../../store/theme-context/useThemeContext";
import usePreviewContext from "../../store/preview-context/usePreviewContext";
import useSnippetContext from "../../store/snippet-context/useSnippetContext";
import MarkdownPreview from '../markdown-preview/MarkdownPreview'
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonAccent from "../buttons/ButtonAccent";
import useHandleUse from "../dashboard-hooks/useHandleUse";
import useHandleRename from "../dashboard-hooks/useHandleRename";
import useHandleRemove from "../dashboard-hooks/useHandleRemove";
import useHandlePreview from "../dashboard-hooks/useHandlePreview";

const DashboardListItem = ({snippet, snippetId, setSnippetId, showRenameControls, setShowRenameControls}) => {
  const {loading} = useLoadingContext()
  const {selectedSnippet} = useSnippetContext()
  const {snippetPreview} = usePreviewContext()
  const {theme} = useThemeContext()
  const {handleUse} = useHandleUse()
  const {handlePreview} = useHandlePreview()
  const {handleRemove} = useHandleRemove({setSnippetId})
  const {handleRename} = useHandleRename({
    setSnippetId,
    setShowRenameControls,
  })

  const divRef = useRef()

  useEffect(() => {
    if (divRef.current && snippetPreview.id === snippet.id) {
      divRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePreview])

  return (
    <div className="flex flex-col w-full justify-center" ref={divRef}>
      <div className="flex flex-col md:flex-row md:min-h-[72px] gap-2 p-5 items-center w-full overflow-hidden">

        {/* snippet title */}
        <p className={`flex justify-center w-full text-lg tracking-wider ${theme === light ? 'snippet-title-shadow-light' : 'snippet-title-shadow-dark'}`}>
          {snippet.title}
        </p>

        {/* buttons */}
        <div className="flex flex-row-reverse items-center gap-3">
          {/* button remove */}
          <ButtonAccent
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
        </div>
      </div>

      {/* snippet preview */}
      <MarkdownPreview snippet={snippet} />
    </div>
  )
}

export default DashboardListItem