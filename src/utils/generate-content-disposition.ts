export function generateContentDisposition(filename: string, extension: string) {
  if(filename.includes(extension)) {
    return encodeURIComponent(filename)
  } else {
    return `${encodeURIComponent(filename)}.${extension}`
  }
}