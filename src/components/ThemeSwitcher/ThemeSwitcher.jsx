import { useTheme } from "../../lib/themeContext";
import { useI18n } from "../../lib/i18nContext";
import Icon from "../Icon";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const { t } = useI18n();

    return (
        <button
            title={`${t("switchTheme")} ${theme === "green" ? t("purple") : t("green")}`}
            className="theme-switcher w-[100%] flex justify-between align-center ml-1"
            onClick={() => setTheme(theme === "green" ? "purple" : "green")}
        >
            <span className="sr-only">Switch Theme</span>
            <div className="theme-switcher"></div>
            {/* <Icon height={24} icon="scheme" width={24} /> */}
        </button>
    );
};

export default ThemeSwitcher;
