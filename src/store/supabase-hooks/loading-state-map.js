// TODO: repetition
const getLoadingState = (action, setLoading, setSyncLoading) => {
  const loadingStateMap = {
    'ADD_snippet': setLoading,
    'MODIFY_snippet': setLoading,
    'RENAME_snippet': setLoading,
    'REMOVE_snippet': setLoading,
    'UPDATE_password': setLoading,
    'UPDATE_displayName': setLoading,
    'USE_refreshSession': setSyncLoading
  }
  return loadingStateMap[action]
}

export default getLoadingState