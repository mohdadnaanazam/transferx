import Image from 'next/image'
import { EllipsisVertical, FileImage, FileVideo, Folder } from 'lucide-react';

type CardProps = {
  url: string;
  name: string;
  size: string;
  uploadDate: string;
  type: string;
}

const RenderPreview: React.FC<{ url: string; type: string }> = ({ url, type }) => {
  if (type.includes('image')) {
    return <Image src={url} alt="preview" className='mx-auto' height={200} width={200} />
  } else if (type.includes('video')) {
    return <Image src={'/video.png'} alt="preview" className='mx-auto' height={200} width={200} />
  } else {
    return <Image src={'/folder.png'} alt="preview" className='mx-auto' height={200} width={200} />
  }
}

export const Card: React.FC<CardProps> = ({ url, name, size, uploadDate, type }) => {
  return (
    <div className="rounded-xl dark:bg-gray-800 bg-gray-100 sm:w-96 flex flex-col">
      <div className="p-2">
        <div className="flex items-center justify-between">
          <div className='flex space-x-3'>
            <div className="flex items-center space-x-2 space-y-2">
              {
                type.includes('image') ? <FileImage size={20} strokeWidth={1.75} /> :
                  type.includes('video') ? <FileVideo size={20} strokeWidth={1.75} /> : <Folder size={20} strokeWidth={1.75} />
              }
            </div>
            <p className="font-semibold">{name.slice(0, 25)}</p>
          </div>
          <EllipsisVertical size={20} strokeWidth={1.75} />
        </div>
      </div>
      <div className='w-88 rounded-xl m-1 border dark:border-gray-700 border-gray-300 p-3 cursor-pointer'>
        <RenderPreview url={url} type={type} />
      </div>
      <div className="mt-auto p-2">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center space-x-2 w-full">
            <div className="flex space-x-4 items-center w-full">
              <img
                alt=""
                className="w-6 h-6 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                src="https://source.unsplash.com/40x40/?portrait?1"
              />
              <div className='flex justify-between w-full'>
                <span className="font-semibold text-sm text-gray-500">Uploaded at {uploadDate}</span>
                <span className="font-semibold text-sm text-gray-600 ml-auto">{size}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
