import React from 'react';

const TableShimmer: React.FC = () => {
  const rows = Array.from({ length: 6 });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className='font-semibold'>
          <tr>
            <th className="py-2 px-4 text-left font-semibold">Status</th>
            <th className="py-2 px-4 text-left font-semibold">Name</th>
            <th className="py-2 px-4 text-left font-semibold">Download URL</th>
            <th className="py-2 px-4 text-left font-semibold">Expiry</th>
            <th className="py-2 px-4 text-left font-semibold">Shareable URL</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-6 px-4">
                <div className="h-4 w-4 bg-gray-700 rounded-full shimmer"></div>
              </td>
              <td className="py-6 px-4">
                <div className="h-4 bg-gray-700 rounded shimmer w-24"></div>
              </td>
              <td className="py-6 px-4">
                <div className="h-8 bg-gray-700 rounded shimmer w-32"></div>
              </td>
              <td className="py-6 px-4">
                <div className="h-6 bg-gray-700 rounded shimmer w-20"></div>
              </td>
              <td className="py-6 px-4">
                <div className="h-6 bg-gray-700 rounded shimmer w-24"></div>
              </td>
              <td className="py-6 px-4">
                <div className="h-8 bg-gray-700 rounded shimmer w-28"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableShimmer;
