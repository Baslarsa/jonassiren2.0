import React from 'react'
import TextSection from '../components/TextSection'
import ProductGroup from '../components/ProductGroup'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import TextAndImage from '../components/TextAndImage'
import Hero from '../components/Hero'
import SmallHero from '../components/SmallHero'
import ImageGrid from '../components/ImageGrid'

const htmlForSection = (section, logoUrl) => {
  switch (section.__typename) {
    case 'HeroRecord':
      return (
        <Hero
          image={section.image.url}
          title={section.title}
          text={section.description}
          link={section.link[0]}
          logoUrl={logoUrl}
          key={section.id}
        />
      )
    case 'SmallHeroRecord':
      return (
        <SmallHero
          image={section.image.url}
          title={section.title}
          logoUrl={logoUrl}
          key={section.id}
        />
      )
    case 'TextAndImageRecord':
      return (
        <TextAndImage
          title={section.title}
          text={section.text}
          imageUrl={section.image.url}
          link={section.link[0]}
          reversed={section.reverse}
          key={section.id}
        />
      )
    case 'TextSectionRecord':
      return (
        <TextSection
          title={section.title}
          key={section.id}
          text={section.text}
          textAlign={section.textAlign}
        />
      )
    case 'ProductGroupRecord':
      return (
        <ProductGroup
          title={section.title}
          products={section.product}
          key={section.id}
        />
      )
    case 'GalleryRecord':
      return (
        <Gallery
          title={section.title}
          images={section.images}
          text={section.description}
          key={section.id}
        />
      )
    case 'ContactFormRecord':
      return (
        <ContactForm
          key={section.id}
          title={section.title}
          image={section.image?.url}
        />
      )
    case 'ImageGridRecord':
      return <ImageGrid items={section.imageLink} />
  }
}

export default htmlForSection
