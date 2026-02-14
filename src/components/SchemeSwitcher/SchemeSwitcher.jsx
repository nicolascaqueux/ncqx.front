import { useScheme } from "../../lib/schemeContext";
import { useI18n } from "../../lib/i18nContext";
import Icon from "../Icon";

const SchemeSwitcher = () => {
    const { scheme, setScheme } = useScheme();
    const { t } = useI18n();

    return (
        <button
            title={`${t("switchTheme")} ${scheme === "dark" ? t("light") : t("dark")}`}
            className="scheme-switcher w-[100%] flex justify-between align-center"
            onClick={() => setScheme(scheme === "dark" ? "light" : "dark")}
        >
            <span className="sr-only">Switch Scheme</span>
            <Icon
                height={24}
                icon={scheme === "dark" ? "night" : "day"}
                width={24}
            />
        </button>
    );
};

export default SchemeSwitcher;
