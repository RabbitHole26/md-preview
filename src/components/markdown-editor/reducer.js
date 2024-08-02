import { commandsDropdown, commandsExpanded } from "./EditorCommands"
import { 
  SET_isComponentMounted,
  SET_editorPreview,
  SET_editorVisibleDragbar,
  SET_editorHeight,
  SET_editorCommands
} from "./reducer-action-types"

// import environment variable
const environmentMode = import.meta.env.VITE_ENV_MODE

const viewportFilter = {
  isViewportXl: window.innerWidth >= 1280,
  isViewportLg: window.innerWidth >= 1024,
  isViewportXs: window.innerWidth >= 500
}

const initialValues = {
  editorPreview_INITIAL: viewportFilter.isViewportXl 
    ? 'live' : 'edit',
  editorVisibleDragbar_INITIAL: viewportFilter.isViewportLg 
    ? true : false,
  editorHeight_INITIAL: viewportFilter.isViewportLg 
    ? 700 : 500,
  editorCommands_INITIAL: viewportFilter.isViewportXs 
    ? commandsExpanded : commandsDropdown
}

const initialState = {
  isComponentMounted: false,
  editorPreview: initialValues.editorPreview_INITIAL,
  editorVisibleDragbar: initialValues.editorVisibleDragbar_INITIAL,
  editorHeight: initialValues.editorHeight_INITIAL,
  editorCommands: initialValues.editorCommands_INITIAL
}

// ! the reducer takes the default states defined above and updates it with data it gets from the action.payload object coming from the 'MarkdownEditor' module where dispatch is called
const reducer = (state, action) => {
  switch (action.type) {
    case SET_isComponentMounted:
      return {...state, isComponentMounted: true}
    case SET_editorPreview:
      return {...state, editorPreview: action.payload}
    case SET_editorVisibleDragbar:
      return {...state, editorVisibleDragbar: action.payload}
    case SET_editorHeight:
      return {...state, editorHeight: action.payload}
    case SET_editorCommands:
      return {...state, editorCommands: action.payload}
    default:
      if (environmentMode === 'development') {
        throw new Error(`Provided action type doesn't match any of the reducer switch statement cases!`)
      } else {
        console.warn(`Provided action type doesn't match any of the cases. Initial state was returned!`)
        return state
      }
  }
}

export {initialState, reducer}