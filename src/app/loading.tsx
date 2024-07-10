export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-around min-h-screen bg-gray-900">
      <div className="flex flex-col items-start space-y-10 p-4 h-[200px] w-[400px] bg-gray-800 rounded-lg">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-700 shimmer rounded-full"></div>
        <div className="flex justify-start space-x-10">
          <div className="h-8 bg-gray-700 shimmer rounded w-24 mb-2"></div>
          <div className="h-8 bg-gray-700 shimmer rounded w-24 mb-2"></div>
        </div>
      </div>
      <div className='w-1/2 hidden md:flex justify-center flex-col items-end'>
          <div className='flex items-center flex-row space-x-5 relative'>
            <div className='bg-green-0 w-2 h-28 mt-6' />
            <h1 className='text-[120px] font-medium'>transferX</h1>
          </div>
          <p>Where files fly faster</p>
        </div>
    </div>
  )
}
