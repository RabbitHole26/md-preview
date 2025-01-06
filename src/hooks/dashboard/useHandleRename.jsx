const useHandleRename = ({
  setShowRenameControls, 
  setSnippetId
}) => {
  const handleRename = (snippet_id) => {
    setSnippetId(snippet_id)
    setShowRenameControls(prev => (
      {...prev, [snippet_id]: true}
    ))
  }

  const handleRenameCancel = (snippet_id) => {
    setShowRenameControls(prev => (
      {...prev, [snippet_id]: false}
    ))
  }

  return {handleRename, handleRenameCancel}
}

export default useHandleRename