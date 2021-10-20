import Image from 'next/image'
import Link from 'next/link'

import { LayoutHeader } from '@components/LayoutHeader'
import smallProfileImage from 'public/profile-small.png'

export default function HomePage() {
  return (

    <LayoutHeader headTitle="Christoffer Granstedt - Web Developer" headDescription="Christoffer Granstedts portfolio site of some of the projects hes been working on. Get information about Christoffer or contact him.">
      <div className="text-center h-full mx-auto sm:px-8 flex flex-wrap place-content-center p-2 lg:w-4/5">
        <div className="w-full sm:flex-1 sm:w-22 my-auto">
          <h1 className="tracking-tight font-black text-gray-600 text-5xl phone:text-6xl sm:text-7xl md:text-8xl xl:text-8xl 2xl:text-9xl">Hi, I&apos;m <br/><span className="text-transparent bg-gradient-to-r bg-clip-text from-primary to-third">Christoffer</span></h1>
          <h2 className="text-md text-gray-600 phone:text-xl lg:text-2xl my-2 mb-4 md:mb-8">- a web developer living in Gothenburg in Sweden</h2>

          <Link href="/projects" passHref><p className="py-2 px-4 rounded-lg bg-primary hover:bg-primaryHover text-white cursor-pointer text-xs md:text-base mx-2 inline-block">View projects</p></Link>
          <Link href="/contact" passHref><p className="py-2 px-4 rounded-lg bg-third hover:bg-thirdHover text-white cursor-pointer text-xs md:text-base mx-2 inline-block mt-2">See contact information</p></Link>
        </div>
        <div className="w-full sm:flex-1 sm:w-22 my-auto mt-12">
          <div className="w-36 h-36 sm:w-48 sm:h-48 md:h-52 md:w-52 lg:w-64 lg:h-64 xl:w-96 xl:h-96 relative inline-block">
            <Image className="rounded-full" src={smallProfileImage} alt="A image of Christoffer Granstedt with no background" placeholder="blur" layout="fill" objectFit="contain"/>
          </div>
        </div>
      </div>
    </LayoutHeader>
  )
}7