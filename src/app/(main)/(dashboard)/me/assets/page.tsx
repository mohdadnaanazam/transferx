import AssetCard from "@/components/AssetCard/AssetCard"

export default function Assets() {

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md border-neutral-200 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex flex-wrap justify-start gap-2 w-full m-2">
          {[...new Array(8)].map((_, i) => (
            <AssetCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
