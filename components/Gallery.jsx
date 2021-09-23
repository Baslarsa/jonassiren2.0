import { Button, Modal } from "@material-ui/core";
import { gql } from "graphql-request";
import Image from "next/image";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import { useState } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useCallback } from "react";

export const GalleryFragment = gql`
    fragment GalleryFragment on GalleryRecord {
        id
        title
        description
        images {
            url
            id
        }
    }
`;

const Gallery = ({ title, text, images }) => {
    const [displayUrl, setDisplayUrl] = useState(images[0].url);
    return (
        <div className="max-w-7xl w-full text-white mx-auto px-4 md:px-16 xl:px-0">
            <div className="text-white py-8">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 py-4 pr-0 md:pr-8 md:px-0 flex flex-col justify-center">
                        <h2 className="py-4 text-6xl text-left">{title}</h2>
                        <p className=" text-left">{text}</p>
                    </div>
                    <div className="w-full md:w-1/2 h-96 relative my-8 rounded-md overflow-hidden">
                        <Image
                            src={displayUrl}
                            layout="fill"
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-6">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="relative cursor-pointer h-40 w-full border-black rounded-md overflow-hidden opacity-1 transition-all hover:opacity-50"
                            onClick={() => setDisplayUrl(image.url)}
                        >
                            <Image
                                src={image.url}
                                layout="fill"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
