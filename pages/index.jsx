import Header from "../components/Header";
import { TextAndImageFragment } from "../components/TextAndImage";
import { HeroFragment } from "../components/Hero";
import { SmallHeroFragment } from "../components/SmallHero";
import Footer from "../components/Footer";
import { request } from "../lib/datocms";
import { gql } from "graphql-request";
import { TextSectionFragment } from "../components/TextSection";
import { ProductGroupFragment } from "../components/ProductGroup";
import { GalleryFragment } from "../components/Gallery";
import { ContactFormFragment } from "../components/ContactForm";
import htmlForSection from "../lib/htmlForSections";

const PAGE_QUERY = gql`
  ${HeroFragment}
  ${SmallHeroFragment}
  ${TextAndImageFragment}
  ${TextSectionFragment}
  ${ProductGroupFragment}
  ${GalleryFragment}
  ${ContactFormFragment}

  query Page($slug: String!) {
    page(filter: { slug: { eq: $slug } }) {
      title
      slug
      sections {
        __typename
        ... on TextAndImageRecord {
          ...TextAndImageFragment
        }
        ... on HeroRecord {
          ...HeroFragment
        }
        ... on SmallHeroRecord {
          ...SmallHeroFragment
        }
        ... on TextSectionRecord {
          ...TextSectionFragment
        }
        ... on ProductGroupRecord {
          ...ProductGroupFragment
        }
        ... on GalleryRecord {
          ...GalleryFragment
        }
        ... on ContactFormRecord {
          ...ContactFormFragment
        }
      }
    }
    logo {
      smallImage {
        url
      }
      image {
        url
      }
    }
    menu {
      links {
        page {
          slug
          title
        }
      }
    }
    footerLink {
      linksColOne {
        id
        label
        externalLink
        page {
          slug
        }
      }
      linksColTwo {
        id
        label
        externalLink
        page {
          slug
        }
      }
      linksColThree {
        id
        label
        externalLink
        page {
          slug
        }
      }
    }
    contactInfo {
      id
      name
      address
      phone
      email
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: PAGE_QUERY,
    variables: { slug: "home" },
  });
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Header links={data.menu.links} logoUrl={data.logo.smallImage.url} />
      <main className="w-full">
        {data.page.sections.map((section) => (
          <div className="w-full" key={section.id}>
            {htmlForSection(section, data.logo.image.url)}
          </div>
        ))}
      </main>
      <Footer
        links={data.footerLink}
        contact={data.contactInfo}
        logo={data.logo.smallImage.url}
      />
    </div>
  );
}