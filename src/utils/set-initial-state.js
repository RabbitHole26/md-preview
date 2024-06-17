const setInitialState = (key, fallback) => {
  const storedData = window.localStorage.getItem(key)
  return storedData
    ? JSON.parse(storedData)
    : fallback
}

export default setInitialState