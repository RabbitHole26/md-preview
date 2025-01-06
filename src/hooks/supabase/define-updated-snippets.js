const defineUpdatedSnippets = ({existingSnippets, data}) => {
  const currentSnippetIndex = existingSnippets.findIndex(snippet => data?.id === snippet.id)

  const logicModify = (snippet) => ({
    ...snippet,
    body: data.body, 
    caretPosition: data.caretPosition
  })
  
  const logicRename = (snippet) => ({
    ...snippet,
    title: data.title
  })

  // ! call this function by providing 'logicModify' or 'logicRename' as arguments
  const generateUpdatedSnippets = (updateLogic) => {
    return existingSnippets.map((snippet, index) => (
      index === currentSnippetIndex
        ? updateLogic(snippet)
        : snippet
    ))
  }

  return {generateUpdatedSnippets, logicModify, logicRename}
}

export default defineUpdatedSnippets