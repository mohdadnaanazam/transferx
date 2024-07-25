import { Folder, EllipsisVertical } from 'lucide-react'

function FolderCard() {
	return (
		<div className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] rounded-lg dark:hover:bg-gray-900 border p-2">
			<div className='flex justify-between items-center'>
				<button className='flex justify-start gap-x-4'>
					<Folder strokeWidth={1} />
					<p>Photos</p>
				</button>
				<button>
					<EllipsisVertical strokeWidth={1} />
				</button>
			</div>
		</div>
	)
}

export default FolderCard
