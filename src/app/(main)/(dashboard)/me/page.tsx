'use client'

import { useContext } from 'react'
import { Sidebar } from "@/components/dashboard/sidebar"
import { Gridview } from "@/components/Gridview"
import { Listview } from "@/components/Listview"
import { ViewContext, ViewProvider } from '@/context/view-context'
import { ViewToggleHeader } from '@/components/ThemeToggleHeader'
import { UplaodDialog } from '@/components/UploadDialog'

type Props = {}

export const dummyData = [
  { name: 'Vacation Photos', type: 'folder', size: '145 MB', uploadDate: '2023-10-15', url: '' },
  { name: 'Sunset Beach', type: 'image', size: '3.2 MB', uploadDate: '2023-10-15', url: 'https://s3.ap-south-1.amazonaws.com/transferr.me/9f3a17b8-9348-42e1-ae14-81196f0045fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240328T082012Z&X-Amz-Expires=86400&X-Amz-Signature=bb48106a2a814c43393beaf53225a6e419e7b067443cb5d3405a33a30e19ebc7&X-Amz-SignedHeaders=host&x-id=GetObject' },
  { name: 'Holiday Video', type: 'video', size: '230 MB', uploadDate: '2023-09-20', url: 'https://s3.ap-south-1.amazonaws.com/transferr.me/9f3a17b8-9348-42e1-ae14-81196f0045fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240328T082012Z&X-Amz-Expires=86400&X-Amz-Signature=bb48106a2a814c43393beaf53225a6e419e7b067443cb5d3405a33a30e19ebc7&X-Amz-SignedHeaders=host&x-id=GetObject' },
  { name: 'Family Gathering', type: 'video', size: '420 MB', uploadDate: '2023-09-22', url: 'https://s3.ap-south-1.amazonaws.com/transferr.me/9f3a17b8-9348-42e1-ae14-81196f0045fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240328T082012Z&X-Amz-Expires=86400&X-Amz-Signature=bb48106a2a814c43393beaf53225a6e419e7b067443cb5d3405a33a30e19ebc7&X-Amz-SignedHeaders=host&x-id=GetObject' },
  { name: 'Freshers Party', type: 'video', size: '180 MB', uploadDate: '2023-08-10', url: 'https://s3.ap-south-1.amazonaws.com/transferr.me/9f3a17b8-9348-42e1-ae14-81196f0045fd?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAUVMPY6S37V7NTTTG%2F20240328%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240328T082012Z&X-Amz-Expires=86400&X-Amz-Signature=bb48106a2a814c43393beaf53225a6e419e7b067443cb5d3405a33a30e19ebc7&X-Amz-SignedHeaders=host&x-id=GetObject' },
  { name: 'Documents', type: 'folder', size: '12 MB', uploadDate: '2023-10-05', url: '' },
]

export default function Account({ }: Props) {
  const [{ currentView }] = useContext(ViewContext)

  return (
    <main className="flex justify-between mt-1 p-3 relative">
      <Sidebar />
      <div className="w-10/12">
        <ViewToggleHeader />
        {currentView === 'grid' ? <Gridview assets={dummyData} /> : <Listview assets={dummyData} />}
      </div>
      <UplaodDialog />
    </main>
  )
}
