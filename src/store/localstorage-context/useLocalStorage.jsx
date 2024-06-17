/*
** BACKUP
*/

import { useEffect } from "react"

const useLocalStorage = (key, dependency) => {
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(dependency))
  }, [key, dependency])
}

export default useLocalStorage

/*
** NEW
*/

// import { useEffect } from "react"

// const useLocalStorage = (key, dependency) => {
//   useEffect(() => {
//     const title = dependency?.title
//     const keyValue = title
//       ? `${title}_${key}`
//       : key

//     window.localStorage.setItem(keyValue, JSON.stringify(dependency))
//   }, [key, dependency])
// }

// export default useLocalStorage