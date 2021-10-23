import Link from 'next/link'
import Logo from './Logo'

const Footer = ({ links, contact, logo }) => {
  const linkColumns = (linkList) => {
    return (
      <div className="text-center lg:text-left w-full h-full">
        {linkList.map((list) => (
          <ul key={list.length}>
            {[list].map((link) => (
              <li
                key={link.label}
                className="py-2 font-semibold text-md text-black_trans hover:text-black transition-all lg:pr-8 w-auto">
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
  return (
    <div className="w-full bg-cray mt-24">
      <div className="w-full h-full max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 py-16 px-8 md:px-16 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full pb-8">
          <div>{linkColumns(links.linksColOne)}</div>
          <div>{linkColumns(links.linksColTwo)}</div>
          <div>{linkColumns(links.linksColThree)}</div>
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
      <div className="w-full bg-coal mx-auto text-white flex justify-center py-1">
        <small>
          All rights reserved © - AB Siren Soundfactory Oy 2021 - Website by
          David Larsson
        </small>
      </div>
    </div>
  )
}

export default Footer;
