import { commandsDropdown, commandsExpanded } from "./EditorCommands"

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

// ! the reducer functions takes the default states define above and update them with data it gets from the payload coming from the 'MarkdownEditor' module
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_isComponentMounted':
      return {...state, isComponentMounted: true}
    case 'SET_editorPreview':
      return {...state, editorPreview: action.payload}
    case 'SET_editorVisibleDragbar':
      return {...state, editorVisibleDragbar: action.payload}
    case 'SET_editorHeight':
      return {...state, editorHeight: action.payload}
    case 'SET_editorCommands':
      return {...state, editorCommands: action.payload}
  }
}

export {initialState, reducer}