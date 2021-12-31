import Link from 'next/link'
import Logo from './Logo'
import SocialMedia from './SocialMedia'

const linkColumns = (linkList, title) => {
  return (
    <div className="text-center lg:text-left w-full h-full">
      <p className="font-semibold">{title}</p>
      {linkList.map((list, i) => (
        <ul key={`footer--link--${list.label}--${i}`}>
          {[list].map((link) => (
            <li
              key={link.label}
              className="py-2 font-semibold text-md text-black_trans hover:text-main transition-all lg:pr-8 w-auto"
            >
              <Link href={link.externalLink || link.page?.slug}>
                <a>
                  <h4 className="w-auto inline-block md:pr-2 md:pl-0 pr-2 pl-2">
                    {link.label}
                  </h4>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

const Footer = ({ links, contact, logo }) => {
  return (
    <div className="w-full bg-white mt-24">
      <div className="w-full h-full max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 pt-16 px-8 md:px-16 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full pb-8">
          <div>{linkColumns(links.linksColOne, 'Site')}</div>
          <div>{linkColumns(links.linksColTwo, 'Services')}</div>
          <div>{linkColumns(links.linksColThree, 'About us')}</div>
        </div>
        <div>
          <ul className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <li className="py-2 text-5xl text-black">
              {!contact.name ? (
                <h3>{contact.name}</h3>
              ) : (
                <Logo imageUrl={logo} className="h-10 w-64 mx-4 lg:mx-0" />
              )}
            </li>
            <li className="py-2 font-semibold text-md text-black_trans lg:pl-8">
              <h4>{contact.address}</h4>
            </li>
            <li className="py-2 font-semibold text-md text-black_trans lg:pl-8">
              <h4>{contact.phone}</h4>
            </li>
            <li className="py-2 font-semibold text-md text-black_trans lg:pl-8 hover:text-black transition-all">
              <a href={`mailto:${contact.email}`}>
                <h4>{contact.email}</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center md:items-start flex-col text-4xl py-6 max-w-7xl w-full mx-auto text-coal">
        <div className="flex">
          <SocialMedia />
        </div>
      </div>
      <div className="w-full text-sm bg-black mx-auto text-white flex justify-center py-1">
        <small>
          All rights reserved © - AB Siren Sound Factory Oy{' '}
          {new Date().getFullYear()}
        </small>
      </div>
    </div>
  )
}

export default Footer
