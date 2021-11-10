import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

interface FooterProps {
	className: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
	return (
		<footer className={`bg-fourth ${className}`}>
			<div className="container mx-auto mb-auto text-white text-center flex justify-center h-full">
				<div className="self-center">
					<p className=" text-4xl">
						<a className="mx-2 hover:text-secondary" href="mailto:christoffer.granstedt@outlook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope}/></a>
						<a className="mx-2 hover:text-secondary" href="https://www.linkedin.com/in/christoffer-granstedt-17437b88" target="_blank" rel="noreferrer"><i className="devicon-linkedin-plain"/></a>
						<a className="mx-2 hover:text-secondary" href="https://github.com/ChristofferGranstedt" target="_blank" rel="noreferrer"><i className="devicon-github-original"/></a>
					</p>
					<p className="flex-auto text-gray-400 text-sm">&copy; {new Date().getFullYear()} Christoffer Granstedt</p>
				</div>
			</div>
		</footer>
	)
}