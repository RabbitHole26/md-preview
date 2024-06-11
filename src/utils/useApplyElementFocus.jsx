import { useEffect } from "react";

const useApplyElementFocus = (querySelectorValue) => {
  useEffect(() => {
    const element = document.querySelector(querySelectorValue);
    element?.focus()
  }, [querySelectorValue])
}

export default useApplyElementFocus
