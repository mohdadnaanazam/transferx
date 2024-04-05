import React, { useContext, MouseEventHandler } from 'react'
import { AlignJustify, Grid2X2 } from 'lucide-react'
import { ViewContext, SET_CURRENT_VIEW } from '@/context/view-context'

type ViewType = 'grid' | 'list'

export const ViewToggleHeader: React.FC = () => {
  const [{ currentView }, dispatch] = useContext(ViewContext);

  const toggleViewMode = (mode: ViewType): MouseEventHandler<HTMLButtonElement> => () => {
    dispatch({ type: SET_CURRENT_VIEW, payload: mode })
  }

  return (
    <div className="flex justify-end p-2 space-x-3">
      <div className=' flex border rounded-xl space-x-2'>
        <button
          className={`flex items-center justify-center w-9 h-9 focus:outline-none transition duration-300 hover:bg-slate-500 hover:text-gray-800 rounded-l-xl ${currentView === 'grid' ? 'bg-gray-100 text-gray-800' : ''}`}
          onClick={toggleViewMode('grid')}
        >
          <Grid2X2 size={20} strokeWidth={1.25} />
        </button>
        <button
          className={`flex items-center justify-center w-9 h-9 focus:outline-none transition duration-300 hover:bg-slate-500 hover:text-gray-800 rounded-r-xl ${currentView === 'list' ? 'bg-gray-100 text-gray-800' : ''}`}
          onClick={toggleViewMode('list')}
        >
          <AlignJustify size={20} strokeWidth={1.25} />
        </button>
      </div>
    </div>
  )
}
