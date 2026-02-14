import HomeHead from "../../components/HomeHead";
import HomeAbout from "../../components/HomeAbout";
import HomeEntries from "../../components/HomeEntries";
import { useI18n } from "../../lib/i18nContext";

const Home = () => {
    const { t } = useI18n();

    return (
        <>
            <HomeHead
                title={
                    <>
                        {t("homeTitle")}
                        <br />
                        {t("homeTitle2")}
                    </>
                }
                description={
                    <>
                        {t("homeDescription")}
                        <br />
                        {t("homeDescription2")}
                    </>
                }
            />
            <HomeAbout />
            <HomeEntries />
        </>
    );
};

export default Home;
