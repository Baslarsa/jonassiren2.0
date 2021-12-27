import { gql } from 'graphql-request'
import Link from 'next/link'
import CustomButton from './CustomButton'
import Logo from './Logo'

export const HeroFragment = gql`
  fragment HeroFragment on HeroRecord {
    id
    title
    description
    image {
      url
    }
    link {
      label
      externalLink
      page {
        slug
      }
    }
  }
`

const Hero = ({ image, title, text, link, logoUrl }) => {
  return (
    <div className="h-hero w-full mt-16 md:px-16">
      <div
        className="bg-center bg-cover w-full h-full flex flex-col justify-center items-center relative"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent opacity-80"></div>
        <div className="relative pt-16 md:self-start max-w-7xl md:mx-auto md:w-full">
          <Link href="/">
            <a>
              {logoUrl && <Logo imageUrl={logoUrl} className="h-52 w-52" />}
            </a>
          </Link>
        </div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-8 2xl:px-0 flex-1 flex items-center justify-center md:justify-start dark:text-black text-white">
          <div className="text-white flex flex-col items-center md:items-start text-center md:text-left max-w-3xl px-8 md:px-0">
            <h1 className="md:text-9xl text-7xl md:leading-10 md:py-2">
              {title}
            </h1>
            <h4 className="text-xl md:text-2xl font-medium">{text}</h4>
            {link && (
              <CustomButton to={link?.externalLink || link?.page.slug}>
                {link.label}
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
