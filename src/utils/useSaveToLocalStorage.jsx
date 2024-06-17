import { useEffect } from "react"

const useSaveToLocalStorage = (key, dependency) => {
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(dependency))
  }, [key, dependency])
}

export default useSaveToLocalStorage