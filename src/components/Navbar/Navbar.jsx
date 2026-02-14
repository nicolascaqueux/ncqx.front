import { Link, useLocation } from "react-router-dom";
import { useI18n } from "../../lib/i18nContext";
import entriesMap from "../../utils/entriesMap";
import LanguageSwitcher from "../LanguageSwitcher";
// import SchemeSwitcher from "../SchemeSwitcher";

const Navbar = () => {
    const { pathname } = useLocation();
    const { t } = useI18n();

    const listItems = entriesMap.map((item, index) => {
        const isActive = `/${pathname.split("/")[1]}` === item.url;

        return (
            <li key={index} className={`my-auto ${isActive ? "__active" : ""}`}>
                <Link
                    to={item.url}
                    className={`navullia ${isActive ? "__active" : ""}`}
                    id={`navullia-${item.id}`}
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
        <nav className="flex-1" id="navbar">
            <ul className="flex gap-4">
                {listItems}
                <li className="my-auto ml-auto">
                    <LanguageSwitcher />
                </li>
                {/* <li className="my-auto">
                    <SchemeSwitcher />
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
