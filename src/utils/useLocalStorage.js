//custom hook for the local storage
export const useLocalStorage = (state, key, value = '') => {
  if (state === 'set') {
    localStorage.setItem(key, JSON.stringify(value))
  } else if (state === 'get') {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)))
  } else {
    return false
  }
}
