import { Link } from "react-router-dom";
import { useI18n } from "../../lib/i18nContext";
import entriesMap from "../../utils/entriesMap";
import Logo from "../../components/Logo";

const Footer = () => {
    const { t } = useI18n();

    const items = entriesMap.map((item) => (
        <li key={item.id} className="mb-auto">
            <Link to={item.url}>
                <span className="clr-primary">/&nbsp;</span>
                {t(item.id)}
            </Link>
            {item.subEntries && (
                <ul className="mt-2">
                    {item.subEntries.map((subItem) => (
                        <li key={subItem.id}>
                            <Link to={subItem.url} className="text-sm">
                                {t(subItem.id)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));

    return (
        <footer id="footer">
            <div className="max-w-[1440px] mx-auto py-12 px-6">
                <div className="max-w-[800px] flex justify-between mx-auto gap-12">
                    <ul className="flex flex-1 justify-between gap-6">
                        <li className="mb-auto">
                            <Logo />
                        </li>
                        {items}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
