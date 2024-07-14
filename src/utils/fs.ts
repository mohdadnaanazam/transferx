import fs from 'fs'

type StringResolver = (value: string) => void

export const readFile = async (path: string): Promise<string> => {
  const filePromise = new Promise((resolve: StringResolver, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

  const value = await filePromise

  return value
}

export const writeFile = async (path: string, data: string): Promise<void> => {
  const filePromise = new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err !== null) {
        reject(err)
      } else {
        resolve(null)
      }
    })
  })

  await filePromise
}
