import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

import { LinkDescription } from '@/types/LinkDescription'

interface NavbarProps {
  links: LinkDescription[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {

  return (
    <nav className="h-full">
      <ul className="text-center h-full flex justify-center items-center">
        {links.map(link => <li className="inline-block text-white text-md md:text-lg mx-2 phone:mx-6 sm:mx-12" key={uuid()}><Link href={link.link}><a className="hover:text-secondary">{link.name}</a></Link></li>)}
      </ul>
    </nav>
  )
}

export default Navbar