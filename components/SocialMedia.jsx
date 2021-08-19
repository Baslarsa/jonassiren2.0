import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const SocialMedia = () => {
    return (
        <div className="sticky top-0 z-50 w-16 flex flex-col items-center">
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
