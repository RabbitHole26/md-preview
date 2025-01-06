import useAuthContext from '../store/auth-context/useAuthContext'

const useGetExistingSnippets = () => {
  const {session} = useAuthContext()

  const getExistingSnippets = () => {
    const existingSnippets = session?.user.user_metadata.mdSnippets
    return existingSnippets
  }

  return {getExistingSnippets}
}

export default useGetExistingSnippets
