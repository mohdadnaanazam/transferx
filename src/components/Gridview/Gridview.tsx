import React from 'react'
import { Card } from '../ContentCard';

type GridviewProps = {
  assets: Array<{ name: string; type: string; url: string; size: string; uploadDate: string }>
}

export const Gridview: React.FC<GridviewProps> = ({ assets }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {assets.map(item => (
        <Card key={item.name} url={item.url} type={item.type} name={item.name} size={item.size} uploadDate={item.uploadDate} />
      ))}
    </div>
  )
}
