import AssetCard from "@/components/AssetCard/AssetCard"

export default function Assets() {

  return (
    <div className="p-2 md:p-10 rounded-tl-md border-neutral-200 bg-white dark:bg-[#020817] w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 w-full m-2">
        {[...new Array(18)].map((_, i) => (
          <div key={i} className="aspect-w-16 aspect-h-9">
            <AssetCard />
          </div>
        ))}
      </div>
    </div>
  )
}
