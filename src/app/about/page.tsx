import React from 'react'

import ReactMarkdown from 'react-markdown'
import { readFile } from '@/utils/fs'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'transferX - About Us',
  openGraph: {
    images: ['https://transferx-prod.s3.ap-south-1.amazonaws.com/transferx_og.png']
  },
  description: 'Streamline your file transfers with our secure and user-friendly platform. Easily send and receive files of any size, ensuring quick and reliable delivery every time.'
}

export default async function AboutUs(): Promise<JSX.Element> {
  const content: string = await readFile(`${process.cwd()}/content/about_us/about_us.md`)
  return (
    <main className="mt-4 p-4 text-gray-100 max-w-7xl mx-auto text-lg space-y-6">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  )
}