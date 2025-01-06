const removeJwtToken = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key.endsWith('auth-token')) {
        window.localStorage.removeItem(key);
        // ! remove this console log before hosting the app
        console.log(`Removed item with key: ${key}`)
    }
  }
}

export default removeJwtToken
