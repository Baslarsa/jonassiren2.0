import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const Intro = ({ title, text, imageUrl, subTitle }) => {
    return (
        <div className="text-white flex px-2 md:px-16 flex-col lg:flex-row">
            <div className="lg:w-2/4 w-full p-2 lg:p-16 mt-4 flex flex-col lg:items-start">
                <h2 className="my-4 md:w-full">{title}</h2>
                <h3 className="my-4 md:w-full">
                    <strong>{subTitle}</strong>
                </h3>
                <p>{text}</p>
                <Button className="button-primary" variant="outlined">
                    Get in contact <ArrowRightAltIcon />
                </Button>
            </div>
            <div className="lg:w-2/4 w-full p-0 lg:pr-10 my-10 relative z-10 lg:-mt-6">
                <img src={imageUrl} />
            </div>
        </div>
    );
};

export default Intro;
