import { gql } from 'graphql-request'
import Link from 'next/link'
import Image from 'next/image'
import SpotifyLogo from '../svg/SpotifyLogo'

export const ImageGridFragment = gql`
  fragment ImageGridFragment on ImageGridRecord {
    imageLink {
      image {
        url
        alt
      }
      link {
        label
        externalLink
        page {
          slug
          title
        }
      }
    }
  }
`

export const LinkCard = ({ image, link, title }) => {
  return (
    <Link href={link}>
      <a className="relative">
        <Image src={image.url} width={400} height={400} />
        <div className="hover:bg-black bg-transparent transition-all opacity-0 hover:opacity-80 absolute inset-0 text-white flex flex-col justify-center items-center p-4 text-center">
          <p>{title}</p>
          <SpotifyLogo className="fill-current text-green-400 w-10 h-10 my-4" />
        </div>
      </a>
    </Link>
  )
}

const ImageGrid = ({ items }) => {
  return (
    <div className="bg-light pt-8 pb-16 max-w-7xl grid grid-cols-2 md:grid-cols-4 mx-auto gap-4">
      {items.map((item) => (
        <LinkCard
          image={item.image}
          link={item.link[0].externalLink || item.link[0].page?.slug}
          title={item.link[0].label}
        />
      ))}
    </div>
  )
}

export default ImageGrid
