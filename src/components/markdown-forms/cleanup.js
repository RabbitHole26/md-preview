const cleanUp = (setSelectedSnippet, reset) => {
  if (setSelectedSnippet !== null)
    setSelectedSnippet(null)
  if (reset !== null)
    reset()
}

export default cleanUp