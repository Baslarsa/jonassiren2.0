import classNames from 'classnames'
import { gql } from 'graphql-request'
import Image from 'next/image'
import CustomButton from './CustomButton'

export const TextAndImageFragment = gql`
  fragment TextAndImageFragment on TextAndImageRecord {
    id
    title
    text
    reverse
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

const TextAndImage = ({ title, text, imageUrl, link, reversed }) => {
  return (
    <div
      className={classNames(
        'flex flex-col md:flex-row max-w-7xl mx-auto mt-6 px-4 md:px-16 xl:px-0 py-8',
        {
          'md:flex-row-reverse': reversed,
        },
      )}
    >
      <div
        className={classNames(
          'py-16 rounded-md lg:w-1/2 px-6 w-full text-center my-auto text-coal bg-white',
          {
            'md:text-right md:pl-8': reversed,
            'md:text-left md:pr-8': !reversed,
          },
        )}
      >
        <h2 className="md:w-full text-4xl md:text-6xl">{title}</h2>
        <p
          className={classNames('text-center', {
            'md:text-left': !reversed,
            'md:text-right': reversed,
          })}
        >
          {text}
        </p>
        {link && (
          <CustomButton to={link?.externalLink || link.page?.slug}>
            {link.label}
          </CustomButton>
        )}
      </div>
      <div
        className={classNames('lg:w-1/2 w-full h-100', {
          'md:pl-16': !reversed,
          'md:pr-16': reversed,
        })}
      >
        <div className="w-full h-full relative">
          <Image
            layout="fill"
            src={imageUrl}
            className="rounded object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default TextAndImage
