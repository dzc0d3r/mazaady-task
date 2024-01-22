export async function fetchData(route) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${route}`
  const headers = new Headers()
  headers.append("Private-Key", process.env.NEXT_PUBLIC_API_KEY)
  const options = {
    method: "GET",
    headers: headers,
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}
