export const parseFormData = (data: FormData) => {
  const parsedData: Record<string, unknown> = {}
  for (const [key, value] of data.entries()) {
    parsedData[key] = value
  }
  return parsedData
}