import { useEffect } from "react"

const useLocalStorage = (key, dependency) => {
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(dependency))
  }, [key, dependency])
}

export default useLocalStorage