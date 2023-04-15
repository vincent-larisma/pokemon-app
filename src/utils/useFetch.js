// function fetches the data from the API
export const useFetch = async (url) => {
  const data = await fetch(url)
  const result = await data.json()

  return result
}
