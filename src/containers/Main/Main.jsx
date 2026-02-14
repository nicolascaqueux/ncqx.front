import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "../../lib/i18nContext";
import MainHead from "../../components/MainHead/MainHead";
import useScrollToTopOnPathChange from "../../hooks/useScrollToTopOnPathChange";
import entriesMap from "../../utils/entriesMap";

const Main = ({ children }) => {
    const { pathname } = useLocation();
    const { t } = useI18n();

    useScrollToTopOnPathChange();

    return (
        <main
            className="prose max-w-[1440px] min-h-[500px] mx-auto py-12 px-6 my-10"
            id="content"
        >
            <MainHead
                title={t(entriesMap.find((i) => i.url === pathname)?.id)}
            />
            {children}
        </main>
    );
};

export default Main;
