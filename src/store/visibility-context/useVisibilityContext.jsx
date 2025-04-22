import { useContext } from "react";
import { VisibilityContext } from "./VisibilityContext";

const useVisibilityContext = () => useContext(VisibilityContext)

export default useVisibilityContext