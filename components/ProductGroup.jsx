import { gql } from 'graphql-request'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
export const ProductGroupFragment = gql`
  fragment ProductGroupFragment on ProductGroupRecord {
    id
    title
    product {
      id
      title
      description
      image {
        url
      }
      link {
        slug
      }
    }
  }
`

const ProductCard = ({ title, description, imgUrl, link }) => {
  return (
    <Link href={link}>
      <div className="text-coal bg-white cursor-pointer w-full flex flex-col items-center p-4 text-center bg-gray rounded-md">
        <div className="h-thumb w-full relative mb-2 rounded overflow-hidden">
          <Image
            src={imgUrl}
            layout="fill"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1 py-2">
          <h3 className="text-4xl">{title}</h3>
          <p>{description}</p>
        </div>
        {link && <CustomButton to={link}>Read more</CustomButton>}
      </div>
    </Link>
  )
}

const ProductGroup = ({ products, title }) => {
  return (
    <div className="bg-light pt-8 pb-16">
      <div className="max-w-7xl mx-auto lg:px-16 xl:px-0">
        <div className="text-center text-coal w-full">
          {title && <h2 className="mb-4 text-7xl">{title}</h2>}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 text-center text-coal w-full">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imgUrl={product.image.url}
              link={product.link.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGroup
