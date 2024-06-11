const getToastMessage = (action) => {
  const toastMessageMap = {
    // TODO: repetition
    'ADD_snippet': 'Snippet saved successfully.',
    'MODIFY_snippet': 'Snippet updated successfully.',
    'RENAME_snippet': 'Snippet renamed successfully.',
    'REMOVE_snippet': 'Snippet removed successfully.',
    'UPDATE_password': 'Password changed successfully.',
    'UPDATE_displayName': 'Display name changed successfully.',
    'USE_refreshSession': 'Snippets synced.'
  }
  return toastMessageMap[action]
}

export default getToastMessage

