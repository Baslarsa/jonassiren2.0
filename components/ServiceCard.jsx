import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const ServiceCard = ({ title, description, imgUrl, link }) => {
    return (
        <div className="text-white w-full lg:w-1/3 flex flex-col lg:items-start justify-center p-2 text-center itemd-center lg:text-left">
            <div className="h-thumb w-full my-8">
                <img
                    src={imgUrl}
                    className="object-cover h-full w-full rounded hover:scale-50"
                />
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <Button href={link} className="button-primary" variant="outlined">
                Read more
            </Button>
        </div>
    );
};

export default ServiceCard;
