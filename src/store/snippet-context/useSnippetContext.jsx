import { useContext } from "react";
import { SnippetContext } from "./SnippetContext";

const useSnippetContext = () => useContext(SnippetContext)

export default useSnippetContext