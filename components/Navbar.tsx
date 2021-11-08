import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { LinkDescription } from '@/types/LinkDescription'

interface NavbarProps {
  links: LinkDescription[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const router = useRouter()

  return (
    <nav className="h-full">
      <ul className="text-center h-full flex justify-center items-center">
        {links.map(link => <li className="inline-block text-gray-200 text-md md:text-lg mx-2 phone:mx-6 sm:mx-12" key={link.id}><Link href={link.link}><a className={` ${router.pathname === link.link ? 'text-white border-b-2 border-secondary font-semibold' : ''} hover:text-white`}>{link.name}</a></Link></li>)}
      </ul>
    </nav>
  )
}

export default Navbar