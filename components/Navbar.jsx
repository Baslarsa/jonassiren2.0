import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import NavSlider from "./NavSlider";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            style={{ height: "4rem" }}
            className="bg-black flex justify-center fixed top-0 left-0 right-0 z-50"
        >
            <div className="nav-inner w-full flex items-center justify-end px-2 sm:px-12 md:px-14 lg:px-14 xl:px-14">
                <div
                    className="nav-button flex items-center"
                    onClick={toggleNav}
                >
                    <h5
                        className="text-white hidden md:block"
                        style={{ transform: "translateY(2px)" }}
                    >
                        {isOpen ? "Close" : "Menu"}
                    </h5>
                    {!isOpen ? (
                        <MenuIcon
                            className="h-8 w-8 cursor-pointer"
                            style={{
                                fill: "white",
                                height: "2rem",
                                width: "3rem",
                            }}
                        />
                    ) : (
                        <CloseIcon
                            className="h-8 w-8 cursor-pointer"
                            style={{
                                fill: "white",
                                height: "2rem",
                                width: "3rem",
                            }}
                        />
                    )}
                </div>
            </div>

            <NavSlider isOpen={isOpen} onToggle={toggleNav} />
        </div>
    );
};

export default Navbar;
