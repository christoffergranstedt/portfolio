import { Navbar } from '@components/Navbar'
import { LinkDescription } from '@/types/LinkDescription'

interface HeaderProps {
	className: string
}

const links: LinkDescription[] = [
	{  name: 'start', link: '/'},
	{  name: 'projects', link: '/projects'},
	{  name: 'about me', link: '/about'},
	{  name: 'contact', link: '/contact'}
]

export const Header: React.FC<HeaderProps> = ({ className }) => {
	return (
		<header className={`bg-primary ${className}`}>
			<Navbar links={links}/>
		</header>
	)
}