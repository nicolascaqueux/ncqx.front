import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../../lib/i18nContext";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import entriesMap from "../../utils/entriesMap";
import MenuBurger from "../MenuBurger";
import HeaderBrand from "../HeaderBrand";
import LanguageSwitcher from "../LanguageSwitcher";
import SchemeSwitcher from "../SchemeSwitcher";

const Menu = ({ isMenuOpen, toggleMenu }) => {
    const { pathname } = useLocation();
    const { t } = useI18n();

    useLockBodyScroll(isMenuOpen);

    const listItems = entriesMap.map((item, index) => {
        const isActive = `/${pathname.split("/")[1]}` === item.url;

        return (
            <li key={index} className={`my-auto ${isActive ? "__active" : ""}`}>
                <Link
                    to={item.url}
                    className={`navullia ${isActive ? "__active" : ""} text-3xl uppercase font-bold`}
                    id={`navullia-${item.id}`}
                    onClick={() => toggleMenu()}
                >
                    {isActive ? (
                        <span className="clr-primary">/&nbsp;</span>
                    ) : null}{" "}
                    {t(item.id)}
                </Link>
            </li>
        );
    });

    return (
        <div
            id="menu"
            className={
                isMenuOpen
                    ? "header-content fixed top-0 left-0 min-h-[100vh] h-[100%] w-[100%] flex flex-col"
                    : "hidden"
            }
        >
            {isMenuOpen && (
                <>
                    <div className="flex justify-center items-center gap-4 py-4 px-6">
                        <HeaderBrand />
                        <MenuBurger icon="cross" toggleMenu={toggleMenu} />
                    </div>
                    <div className="menu-content flex h-full py-4 px-6">
                        <nav className="my-auto w-full">
                            <ul className="flex flex-col items-end gap-4 flex-1 items-center">
                                {listItems}
                                <li>
                                    <LanguageSwitcher />
                                </li>
                                <li>
                                    <SchemeSwitcher />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </>
            )}
        </div>
    );
};

export default Menu;
