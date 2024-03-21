'use client'
import { Rocket, Share2, Users } from 'lucide-react'
import Link from 'next/link'

export const Sidebar = () => {
  const items = [
    {
      label: 'My Space',
      name: 'my_space',
      icon: <Rocket size={18} strokeWidth={1.6} />,
    },
    {
      label: 'Shared with me',
      name: 'shared_with_me',
      icon: <Users size={18} strokeWidth={1.6} />,
    },
    {
      label: 'Shared by me',
      name: 'shared_by_me',
      icon: <Share2 size={18} strokeWidth={1.6} />,
    },
  ];

  return (
    <div className='m-1'>
    <ul className="list-none">
      {items.map((item, index) => (
        <li key={index} className='m-1'>
          <Link href={`#${item.name}`} className='flex items-center justify-start space-x-3 py-1 px-4 border border-transparent hover:bg-blue-100 hover:text-blue-700 hover:border rounded-2xl'>
            <div className="">{item.icon}</div>
            <span className="sidebar-label">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};
