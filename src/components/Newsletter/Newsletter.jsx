import { useI18n } from "../../lib/i18nContext";
import Icon from "../../components/Icon/Icon";

const Newsletter = () => {
    const { t } = useI18n();

    return (
        <div id="newsletter">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-8 pt-12 pb-13 px-6">
                <div className="w-[100%] max-w-[800px] mx-auto">
                    <div className="flex flex-1">
                        <h2 className="pb-2">Newsletter</h2>
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-start gap-2 text-sm">
                            <Icon height={18} icon="newsletter" width={18} />
                            {t("newsletter")}
                        </p>
                        <hr />
                        <form className="flex gap-4 my-auto">
                            <input type="email" placeholder="Your e-mail" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
