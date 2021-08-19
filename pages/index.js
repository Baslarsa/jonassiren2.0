import Navbar from "../components/Navbar";
import NavSlider from "../components/NavSlider";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { request } from "../lib/datocms";
import Intro from "../components/Intro";
import Services from "../components/Services";
import SocialMedia from "../components/SocialMedia";

const HOMEPAGE_QUERY = `query NewsQuery {
  sitelogo {
    image {
      url
    }
  }
  homepage {
    heroparagraph
    herotext
    heroimage {
      url
    }
    introTitle
    introText
    introSubTitle
    introImage {
      url
    }
    servicesTitle
    servicesDetails
  }
  sitelogo {
    image {
      url
    }
  }
  allServicesCollections {
    id
    description
    text
    title
    link
    image {
      url
    }
  }
}`;

export async function getStaticProps() {
    const data = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 10 },
    });
    return {
        props: { data },
    };
}
export default function Home({ data }) {
    console.log(data);
    return (
        <>
            <NavSlider />
            <Navbar />
            <div className="cont">
                <Hero
                    image={data.homepage.heroimage.url}
                    text={data.homepage}
                    logo={data.sitelogo.image.url}
                />
                <Intro
                    title={data.homepage.introTitle}
                    subTitle={data.homepage.introSubTitle}
                    text={data.homepage.introText}
                    imageUrl={data.homepage.introImage.url}
                />
                <Services
                    title={data.homepage.servicesTitle}
                    text={data.homepage.servicesDetails}
                    services={data.allServicesCollections}
                />
                <Footer />
            </div>
        </>
    );
}
