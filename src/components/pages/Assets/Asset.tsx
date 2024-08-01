import { AssetCard } from "./Card"

type Props = {}

export const Asset = ({ }: Props) => {
  return (
    <div className="p-2 md:p-10 rounded-tl-md border-neutral-200 bg-white dark:bg-[#020817] w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-4 w-[90%] mt-8 md:mt-0 mx-auto md:mx-0 md:w-full md:m-2">
        {[...new Array(18)].map((_, i) => (
          <div key={i} className="aspect-w-16 aspect-h-9">
            <AssetCard />
          </div>
        ))}
      </div>
    </div>
  )
}
