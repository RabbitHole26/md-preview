// * id is generated client-side because the app utilizes the Supabase auth for snippets database
const generateId = () => {
  const idSegmentOne = Math.floor(Math.random() * 1e10).toString()
  const idSegmentTwo = Date.now().toString()
  const id = idSegmentOne + idSegmentTwo
  return id
}

const generateNewSnippet = (data, input) => {
  const newSnipet = {
    id: generateId(), 
    title: data.trim(), 
    body: input.body, 
    caretPosition: input.caretPosition
  }
  return newSnipet
}

export default generateNewSnippet