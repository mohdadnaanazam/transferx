'use client'

import { ChangeEvent, useState } from 'react'

type Props = {}

export const Snip = ({ }: Props) => {
  const [data, setData] = useState({ url: '', alias: '' })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: data.url, alias: data.alias })
    }
    await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/snip-url', options)
  }

  return (
    <div className='flex flex-col mx-auto w-1/2 border gap-6 p-5'>
      <input type="text" name="url" value={data.url} onChange={handleFormChange} />
      <input type="text" name="alias" value={data.alias} onChange={handleFormChange} />
      <button onClick={handleSubmit}>snip</button>
    </div>
  )
}
