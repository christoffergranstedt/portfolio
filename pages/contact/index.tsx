import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { LayoutHeader } from '@components/LayoutHeader'

interface ContactProps {
}

export default function ContactPage ({}: ContactProps) {
  return (
    <LayoutHeader headTitle="Christoffer Granstedt - Contact" headDescription="Contact Christoffer Granstedt for questions, information or inquiries.">
      <div className="mx-auto pt-4 xl:w-3/4 px-2 text-xs sm:text-base">
        <h1 className="text-3xl sm:text-5xl text-black mb-8">contact me</h1>
        <div className="w-96">
          <p><FontAwesomeIcon icon={faEnvelope}/> <strong>E-mail:</strong> <a className="text-primary hover:text-third" href="mailto:christoffer.granstedt@outlook.com" target="_blank" rel="noreferrer">christoffer.granstedt@outlook.com</a></p>
          <p><i className="devicon-linkedin-plain colored"/> <strong>LinkedIn:</strong> <a className="text-primary hover:text-third" href="https://www.linkedin.com/in/christoffer-granstedt-17437b88" target="_blank" rel="noreferrer">Christoffer Granstedt</a></p>
          <p><i className="devicon-github-original colored"/> <strong>GitHub:</strong> <a className="text-primary hover:text-third" href="https://github.com/ChristofferGranstedt" target="_blank" rel="noreferrer">christoffergranstedt</a> (new)</p>
        </div>
      </div>
    </LayoutHeader>
  )
}
