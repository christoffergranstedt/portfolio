import { Navbar } from '@components/Navbar'
import { LinkDescription } from '@/types/LinkDescription'

interface HeaderProps {
	className: string
}

const links: LinkDescription[] = [
	{  name: 'start', link: '/', id: 'id-link-1' },
	{  name: 'projects', link: '/projects', id: 'id-link-2' },
	{  name: 'about me', link: '/about', id: 'id-link-3' },
	{  name: 'contact', link: '/contact', id: 'id-link-4' }
]

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={`bg-primary ${className}`}>
			<Navbar links={links}/>
		</header>
	)
}