import { useI18n } from "../../lib/i18nContext";
import Icon from "../../components/Icon/Icon";

const HomeAbout = () => {
    const { t } = useI18n();

    return (
        <div className="max-w-[800px] mx-auto mb-12">
            <div className="flex items-center sr-only">
                <h2 className="p-2">About</h2>
            </div>
            <div
                className="box text-sm flex justify-center items-center gap-4"
                id="home-about"
            >
                <p className="flex items-center gap-2">
                    <Icon height={18} icon="diploma" width={18} />
                    {t("job")}
                </p>
                <hr />
                <p className="flex items-center gap-2">
                    <Icon height={18} icon="location" width={18} />
                    {t("location")}
                </p>
                <hr />
                <p className="flex items-center gap-2">
                    <Icon height={18} icon="quotes" width={18} />
                    <span className="max-w-[250px] italic">{t("quote")}</span> -
                    <span className="underline"> Simone Weil</span>
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;
