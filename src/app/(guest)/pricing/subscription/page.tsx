import React from 'react'
import { CircleCheck, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function PremiumPrice() {
	const Details = [
		{
			id: "1",
			info: "A growing library of awesome components",
		},
		{
			id: "2",
			info: "React / Next.js / Tailwind CSS code"
		},
		{
			id: "3",
			info: "Serves a wide variety of audience"
		},
		{
			id: "4",
			info: "MIT Licence. Personal or commercial projects."
		},
		{
			id: "5",
			info: "Contact over chat for support"
		}
	]
	return (
		<section className=''>
			<div className='max-w-sm shadow-xl border-[1px] border-gray-400 rounded-md p-4 mx-2 md:mx-6'>
				<p className='text-[#04875e] text-2xl font-semibold'>Primium User</p>
				<div className='text-4xl font-bold py-6 flex justify-start items-center'>
					<DollarSign size={36} strokeWidth={2.75} />
					<p className=''>1/month</p>
				</div>
				<p className='pt-2 pb-8'>All the components that are freely available on the website are free to use.</p>
				{
					Details.map((detail) => (
						<div key={detail?.id} className='flex justify-start items-center py-2'>
							<CircleCheck size={20} strokeWidth={1.25} className="mr-2 my-2 text-green-400 " />
							<p>{detail.info}</p>
						</div>
					))
				}
				<Button className='border-[1px] border-[#04875e] text-[#04875e] bg-[#020817] w-full my-4 text-base'>Buy Now</Button>
			</div>
		</section>
	)
}

export default PremiumPrice
