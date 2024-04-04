import Image from 'next/image'
import React from 'react'

type GridviewProps = {
  assets: Array<{ name: string; type: string; url: string; size: string; uploadDate: string }>
}

const RenderPreview: React.FC<{ url: string; type: string }> = ({ url, type }) => {
  if (type.includes('image')) {
    return <Image src={url} alt="preview" height={200} width={200} style={{ objectFit: 'contain' }} />
  } else if (type.includes('video')) {
    return <Image src={'/video.png'} alt="preview" height={200} width={200} style={{ objectFit: 'contain' }} />
  } else {
    return <Image src={'/folder.png'} alt="preview" height={200} width={200} style={{ objectFit: 'contain' }} />
  }
}

export const Gridview: React.FC<GridviewProps> = ({ assets }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {assets.map(item => (
        <div key={item.name} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex">
          <div className="flex-shrink-0">
            <RenderPreview url={item.url} type={item.type} />
          </div>
          <div className="flex flex-col justify-center p-4">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">Size: {item.size}</p>
            <p className="text-sm text-gray-500">Upload Date: {item.uploadDate}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
