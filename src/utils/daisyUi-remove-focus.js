// ! some daisyUi elements don't lose focus by default when interacted with
// ! eg: dropdowns persist after redirecting to a different component (persist after route change).
const daisyUiRemoveFocus = () => {
  const dropdownElement = document.activeElement
  dropdownElement?.blur()
}

export default daisyUiRemoveFocus