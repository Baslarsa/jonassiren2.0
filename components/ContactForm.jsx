import classNames from "classnames";
import { gql } from "graphql-request";
import Image from "next/image";
import CustomButton from "./CustomButton";

export const ContactFormFragment = gql`
    fragment ContactFormFragment on ContactFormRecord {
        id
        title
        image {
            url
        }
    }
`;

const ContactForm = ({ image, title }) => {
    return (
        <div
            className={classNames("mx-auto bg-gray_1 py-8 mb-20 rounded-md", {
                "max-w-7xl": image,
                "max-w-3xl": !image,
            })}
        >
            <div
                className={classNames("grid", {
                    "md:grid-cols-2 grid-cols-1": image,
                    "grid-cols-1": !image,
                })}
            >
                {image && (
                    <div className="relative h-full w-4/5 mx-auto">
                        <Image
                            src={image}
                            layout="fill"
                            className="object-cover w-auto h-full border-md overflow-hidden"
                        />
                    </div>
                )}
                <div className="w-full px-8 py-24">
                    <h2 className="text-6xl text-white">{title}</h2>
                    <form className="flex flex-col">
                        <input
                            className="my-4 p-2 bg-transparent border-b border-bottom-white"
                            type="text"
                            placeholder="Name"
                        ></input>
                        <input
                            className="my-4 p-2  bg-transparent border-b border-bottom-white"
                            type="text"
                            placeholder="Subject"
                        ></input>
                        <textarea
                            placeholder="Subject"
                            className="my-4 p-2  bg-transparent border-b border-bottom-white"
                        ></textarea>
                        <CustomButton type="submit">Send</CustomButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
