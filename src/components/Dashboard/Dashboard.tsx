
export const Dashboard = ({ }) => {

  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#020817] flex flex-col gap-2 flex-1 w-full h-full">

        {/* <div className="flex gap-2">
            {[...new Array(4)].map((i) => (
              <div
                key={"first" + i}
                className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div> */}
        {/* <div className="flex gap-2 flex-1">
            {[...new Array(2)].map((i) => (
              <div
                key={"second" + i}
                className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div> */}

        <div className="flex gap-4 flex-wrap justify-between items-center overflow-y-auto">
          {[...new Array(8)].map((i) => (
            <div
              key={"first" + i}
              className="h-56 w-[32%] rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
