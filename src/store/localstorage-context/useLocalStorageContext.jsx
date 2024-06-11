import { useContext } from "react"
import { LocalStorageContext } from "./LocalStorageContext"

const useLocalStorageContext = () => useContext(LocalStorageContext)

export default useLocalStorageContext
