import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useEffect, useState } from "react";
import NavSlider from "./NavSlider";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

const Header = ({ links, logoUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeaderLogo, setShowHeaderLogo] = useState(false);
    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowHeaderLogo(true);
            } else {
                setShowHeaderLogo(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div
            style={{ height: "4rem" }}
            className="flex bg-black_2 justify-center fixed top-0 left-0 right-0 z-50"
        >
            <div className="nav-inner w-full flex items-center justify-between px-2 sm:px-12 md:px-14 lg:px-14 xl:px-0 max-w-7xl">
                <Link href="/">
                    <a className="h-full">
                        <div
                            className={classNames(
                                "w-40 h-full relative opacity-0 transition-all",
                                {
                                    "opacity-100": showHeaderLogo,
                                }
                            )}
                        >
                            <Image src={logoUrl} layout="fill" />
                        </div>
                    </a>
                </Link>
                <div
                    className="flex items-center transition-all text-white hover:text-main"
                    onClick={toggleNav}
                >
                    <h5
                        className="hidden md:block cursor-pointer"
                        style={{ transform: "translateY(2px)" }}
                    >
                        {isOpen ? "Close" : "Menu"}
                    </h5>
                    {!isOpen ? (
                        <MenuIcon
                            fontSize="large"
                            className="h-10 w-10 mx-2 fill-current cursor-pointer"
                        />
                    ) : (
                        <CloseIcon
                            fontSize="large"
                            className="h-10 w-10 mx-2 fill-current cursor-pointer"
                        />
                    )}
                </div>
            </div>

            <NavSlider menuItems={links} isOpen={isOpen} onToggle={toggleNav} />
        </div>
    );
};

export default Header;
