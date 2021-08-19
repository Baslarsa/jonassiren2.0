import { Button, Drawer } from "@material-ui/core";

const MENU_ITEMS = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Contact", link: "/contact" },
];

const NavSlider = ({ isOpen, onToggle }) => {
    return (
        <div>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={onToggle}
                className="drawer"
            >
                <nav className="bg-black_2 w-80 h-screen text-white h-full">
                    <ul className="h-full w-full flex flex-col justify-center text-right">
                        {MENU_ITEMS.map((item) => (
                            <li
                                key={item.link}
                                className="w-full px-16 py-2 hover:bg-gray cursor-pointer"
                            >
                                <a href={item.link}>
                                    <h5>{item.title}</h5>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Drawer>
        </div>
    );
};

export default NavSlider;
