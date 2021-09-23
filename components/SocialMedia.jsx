import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import classNames from "classnames";

const SocialMedia = ({ className }) => {
    return (
        <div
            className={classNames(
                "flex items-center justify-center",
                className
            )}
        >
            <div className="p-1">
                <FacebookIcon style={{ fill: "white" }} />
            </div>
            <div className="p-1">
                <InstagramIcon style={{ fill: "white" }} />
            </div>
            <div className="p-1">
                <YouTubeIcon style={{ fill: "white" }} />
            </div>
        </div>
    );
};

export default SocialMedia;
