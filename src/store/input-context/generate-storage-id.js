import generateId from "../../utils/generate-id"

const generateStorageId = (storageType, key) => {
  let storageId = storageType.getItem(key)
  if (!storageId) {
    storageId = generateId()
    storageType.setItem(key, storageId)
  }
  return storageId
}

export default generateStorageId