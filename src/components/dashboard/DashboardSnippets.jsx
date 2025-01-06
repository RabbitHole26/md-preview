import { useState } from "react"
import { light } from "../../store/theme-context/theme-aliases-map"
import useLoadingContext from "../../store/loading-context/useLoadingContext"
import useSnippetContext from "../../store/snippet-context/useSnippetContext"
import DashboardListItem from "./DashboardListItem"
import DashboardRenameControls from "./DashboardRenameControls"
import useGetExistingSnippets from "../../hooks/useGetExistingSnippets"
import DashboardSnippetPlaceholder from "./DashboardSnippetsPlaceholder"
import useThemeContext from "../../store/theme-context/useThemeContext"

const DashboardSnippets = () => {
  const [showRenameControls, setShowRenameControls] = useState({})
  const [snippetId, setSnippetId] = useState(null)
  const {theme} = useThemeContext()
  const {selectedSnippet} = useSnippetContext()
  const {loading} = useLoadingContext()
  const {getExistingSnippets} = useGetExistingSnippets()

  return(
    <div>
      {getExistingSnippets().length > 0
        ? (
          <div>
            {getExistingSnippets().map((snippet) => (
              <li
                className={`flex min-h-[84px] md:min-h-[72px] mb-3 lg:mb-4 shadow-lg rounded-md
                  ${theme === light ? 'bg-neutral-200' : 'bg-stone-900'}
                  ${loading && selectedSnippet === snippet.id ? 'opacity-70' : ''}`
                }
                key={snippet.id}
              >
                {!showRenameControls[snippet.id]
                  ? <DashboardListItem
                      snippet={snippet}
                      snippetId={snippetId}
                      setSnippetId={setSnippetId}
                      showRenameControls={showRenameControls}
                      setShowRenameControls={setShowRenameControls}
                    />
                  : <DashboardRenameControls
                      snippet={snippet}
                      snippetId={snippetId}
                      setSnippetId={setSnippetId}
                      setShowRenameControls={setShowRenameControls}
                    />
                }
              </li>
            ))}
        </div>
        )
        : <DashboardSnippetPlaceholder />
      }
    </div>
  )
}

export default DashboardSnippets