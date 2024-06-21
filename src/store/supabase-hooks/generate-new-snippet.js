// * id is generated client-side because the app utilizes the Supabase auth for snippets database
import generateId from "../../utils/generate-id"

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