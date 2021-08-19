import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SocialMedia from "./SocialMedia";

const Hero = ({ image, text, logo }) => {
    return (
        <div className="h-hero w-full mb-16 flex px-2 md:px-16 sm:px-14">
            <div
                className="w-full h-full bg-center bg-cover flex flex-col items-center lg:items-start justify-center relative sm:px-5 mt-16"
                style={{ backgroundImage: `url("${image}")` }}
            >
                <div className="hero-text text-white absolute z-10 max-w-3xl p-6 sm:p-6 md:p-10 flex lg:block flex-col text-center lg:text-left">
                    <h1>{text.herotext}</h1>
                    <h3>{text.heroparagraph}</h3>
                    <Button className="button-primary" variant="outlined">
                        What we can do for you
                    </Button>
                </div>
                <div className="top-0 left-0 right-0 bottom-0 bg-black_trans absolute flex flex-col items-center md:block">
                    {" "}
                    <div className="w-60 lg:w-60 lg:h-60 absolute md:top-0 md:left-0 left-auto md:bg-black md:pr-10 md:pb-10 md:pl-0 md:pt-0 p-5 flex justify-center items-center">
                        {logo && <img src={logo} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
