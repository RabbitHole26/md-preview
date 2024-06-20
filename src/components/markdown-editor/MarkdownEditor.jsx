import { useEffect, useRef, useReducer } from 'react'
import { initialState, reducer } from './reducer'
import { commandsDropdown, commandsExpanded, extraCommands } from './EditorCommands'
import { light } from '../../store/theme-context/theme-aliases-map'
import useInputContext from '../../store/input-context/useInputContext'
import useThemeContext from '../../store/theme-context/useThemeContext'
import MDEditor from '@uiw/react-md-editor'
import rehypeSanitize from "rehype-sanitize"

const MarkdownInput = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {input, setInput} = useInputContext()
  const {theme} = useThemeContext()
  const editorRef = useRef(null)

  // ! '@uiw/react-md-editor' doesn't expose the 'event' object for function assigned to 'onChange' prop.
  const handleChange = (val, viewUpdate) => {
    // * 'viewUpdate' object can be used in a similar fashion as the 'event' object.
    const getCaretPosition = viewUpdate.target.selectionStart

    setInput({
      ...input,
      body: val,
      caretPosition: getCaretPosition
    })
  }

  // ! this useEffect updates dispatch states dynamically with data it gets from the event listeners
  useEffect(() => {
    // * caret position, returns undefined if fetched before component finished mounting
    // * this dispatch will set the state variable to 'true' so that caret position can be fetched successfully
    dispatch({ 
      type: 'SET_isComponentMounted' 
    })

    const handleResize = () => {
      // ! viewportFilters have to be defined inside useEffect, importing them from 'reducer' doesn't work as expected
      const viewportFilter = {
        isViewportXl: window.innerWidth >= 1280,
        isViewportLg: window.innerWidth >= 1024,
        isViewportXs: window.innerWidth >= 500
      }
      dispatch({ 
        type: 'SET_isComponentMounted' 
      })
      dispatch({ 
        type: 'SET_editorPreview', 
        payload: viewportFilter.isViewportXl ? 'live' : 'edit' 
      })
      dispatch({ 
        type: 'SET_editorVisibleDragbar', 
        payload: viewportFilter.isViewportLg ? true : false 
      })
      dispatch({ 
        type: 'SET_editorHeight', 
        payload: viewportFilter.isViewportLg ? 700 : 500
      })
      dispatch({
        type: 'SET_editorCommands',
        payload: viewportFilter.isViewportXs ? commandsExpanded : commandsDropdown
      })
    }

    // add event listener when component mounts
    window.addEventListener('resize', handleResize)
    // remove event listener when component unmounts (use callback)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // * save caret position to local storage
  useEffect(() => {
    if (state.isComponentMounted && editorRef) {
      editorRef.current.textarea.selectionStart = input.caretPosition
    }
  }, [input, state.isComponentMounted])

  return (
    <div className='mb-[100px]' data-color-mode={theme === light ? 'light' : 'dark'}>
      <MDEditor
        ref={editorRef}
        value={input.body}
        onChange={handleChange}
        previewOptions={{
          // ! sanitize user input with this plugin to reduce attack surface
          rehypePlugins: [[rehypeSanitize]],
        }}
        textareaProps={{
          placeholder: 'Enter your Markdown here...'
        }}
        preview={state.editorPreview}
        visibleDragbar={state.editorVisibleDragbar}
        height={state.editorHeight}
        commands={state.editorCommands}
        extraCommands={extraCommands}
        autoFocus
      />
    </div>
  )
}

export default MarkdownInput