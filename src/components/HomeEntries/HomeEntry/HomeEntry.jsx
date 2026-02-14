import { Link } from "react-router-dom";
import { useI18n } from "../../../lib/i18nContext";
import entriesMap from "../../../utils/entriesMap";
import Icon from "../../../components/Icon";

const HomeEntry = ({ id, favorite, latest }) => {
    const { t } = useI18n();

    const rowConfig = entriesMap.find((i) => i.id === id);

    return (
        <div className="home-entry">
            <div className="home-entry-head flex justify-between items-center">
                <h2 className="py-2">{t(rowConfig.id)}</h2>
                <Link
                    to={rowConfig.url}
                    className="flex items-center gap-2 pt-2 pr-2 pb-2 pl-3 link-small"
                >
                    {t("explore")}{" "}
                    <span className="sr-only">{rowConfig.label}</span>{" "}
                    <Icon height={12} icon="chevron" width={12} />
                </Link>
            </div>
            <div key={rowConfig.id} className="box bordered">
                <div className="flex items-center gap-2">
                    <Icon height={12} icon="clock" width={12} />
                    <p>{t("latestContent")}</p>
                </div>
                <hr />
                <div id={`home-entry-${id}-latest`}>{latest}</div>
                {favorite && (
                    <>
                        <hr />
                        <div className="flex items-center gap-2">
                            <Icon height={12} icon="heart" width={12} />
                            <p>{t("mostViewed")}</p>
                        </div>
                        <hr />
                        <div id={`home-entry-${id}-favorite`}>{favorite}</div>
                    </>
                )}
                <div className="home-entry-footer">
                    <hr />
                    <Link
                        to={rowConfig.url}
                        className="flex items-center gap-2 link-small justify-end"
                    >
                        {t("explore")}{" "}
                        <span className="sr-only">{rowConfig.label}</span>{" "}
                        <Icon height={12} icon="chevron" width={12} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeEntry;
