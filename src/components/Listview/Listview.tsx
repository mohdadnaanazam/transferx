import React from 'react'
import Image from 'next/image'

type ListviewProps = {
  assets: Array<{ name: string; type: string; url: string; size: string; uploadDate: string }>
}
const RenderPreview: React.FC<{ url: string; type: string }> = ({ url, type }) => {
  if (type.includes('image')) {
    return <Image src={url} alt="preview" height={30} width={30} style={{ objectFit: 'contain' }} />
  } else if (type.includes('video')) {
    return <Image src={'/video.png'} alt="preview" height={30} width={30} style={{ objectFit: 'contain' }} />
  } else {
    return <Image src={'/folder.png'} alt="preview" height={30} width={30} style={{ objectFit: 'contain' }} />
  }
}

export const Listview: React.FC<ListviewProps> = ({ assets }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="dark:bg-gray-900">
        <tr className="bg-gray-400 dark:bg-gray-900">
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2 text-left text-white dark:text-gray-300">Name</th>
          <th className="px-4 py-2 text-left text-white dark:text-gray-300">Size</th>
          <th className="px-4 py-2 text-left text-white dark:text-gray-300">Upload Date</th>
        </tr>
      </thead>
      <tbody>
        {assets.map(item => (
          <tr key={item.name} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
            <td className="px-4 py-2"><RenderPreview url={item.url} type={item.type} /></td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.size}</td>
            <td className="px-4 py-2">{item.uploadDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
