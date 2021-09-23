import { Button, Drawer } from "@material-ui/core";
import SocialMedia from "../components/SocialMedia";
import Link from "next/link";

const NavSlider = ({ isOpen, onToggle, menuItems }) => {
    return (
        <div>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={onToggle}
                className="drawer"
            >
                <nav className="bg-gray_1 w-80 h-screen text-white flex flex-col px-16 py-16">
                    {menuItems && (
                        <ul className="h-full w-full flex flex-col justify-center text-right flex-1">
                            {menuItems.map((item) => (
                                <li
                                    key={item.page.slug}
                                    className="w-full py-2 hover:bg-gray cursor-pointer"
                                    onClick={() => onToggle()}
                                >
                                    <Link href={item.page.slug}>
                                        <a href={item.page.slug}>
                                            <h5 className="font-bold border-transparent transition-all hover:text-main">
                                                {item.page.title}
                                            </h5>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    <SocialMedia />
                </nav>
            </Drawer>
        </div>
    );
};

export default NavSlider;
