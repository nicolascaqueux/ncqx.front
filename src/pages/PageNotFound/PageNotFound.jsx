import MainHead from "../../components/MainHead/MainHead";
import { useI18n } from "../../lib/i18nContext";

const PageNotFound = () => {
    const { t } = useI18n();

    return <MainHead title={t("pageNotFound")} />;
};

export default PageNotFound;
