// function fetches the data from the API
export const getData = async (url) => {
  const data = await fetch(url)
  const result = await data.json()

  return result
}
