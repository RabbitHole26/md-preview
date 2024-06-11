import { useContext } from "react";
import { PreviewContext } from "./PreviewContext";

const usePreviewContext = () => useContext(PreviewContext)

export default usePreviewContext