import { useState } from "react";
import Navbar from "../../components/Navbar";
import MenuBurger from "../../components/MenuBurger";
import Menu from "../../components/Menu";
import HeaderBrand from "../../components/HeaderBrand";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky z-[1] top-0 flex mx-auto py-4 px-6">
            <div className="header-desktop-content w-[800px] mx-auto flex justify-center items-center gap-4">
                <HeaderBrand />
                <MenuBurger icon="menu" toggleMenu={toggleMenu} />
                <Navbar />
            </div>
            <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    );
};

export default Header;
