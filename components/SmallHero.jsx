import CustomButton from "./CustomButton";
import { gql } from "graphql-request";
import Logo from "./Logo";
import Link from "next/link";

export const SmallHeroFragment = gql`
    fragment SmallHeroFragment on SmallHeroRecord {
        id
        title
        image {
            url
        }
    }
`;

const SmallHero = ({ image, title, logoUrl }) => {
    return (
        <div className="h-80 w-full mt-16 md:px-16 mb-16">
            <div
                className="bg-center bg-cover w-full h-full relative flex items-center"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black to-transparent opacity-80"></div>
                <div className="max-w-7xl w-full mx-auto items-center relative grid grid-cols-1 md:grid-cols-3">
                    <div className="relative mx-auto md:mx-0">
                        <Link href="/">
                            <a>
                                {logoUrl && (
                                    <Logo
                                        className="w-36 h-36"
                                        imageUrl={logoUrl}
                                    />
                                )}
                            </a>
                        </Link>
                    </div>
                    <h1 className="md:text-9xl text-6xl text-white mx-auto">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default SmallHero;
