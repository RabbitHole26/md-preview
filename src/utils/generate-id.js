const generateId = () => {
  const idSegmentOne = Math.floor(Math.random() * 1e10).toString()
  const idSegmentTwo = Date.now().toString()

  const idSegmentThree = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let randomString = ''

    for (let i = 0; i < letters.length; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)]
      randomString += randomLetter
    }
    return randomString
  }

  const id = idSegmentOne + idSegmentThree() + idSegmentTwo
  return id
}

export default generateId