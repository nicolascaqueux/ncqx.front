import { useI18n } from "../../lib/i18nContext.jsx";
import { useScheme } from "../../lib/schemeContext";
import formatDate from "../../utils/formatDate.jsx";
import Tags from "../Tags";

const MusicPosts = ({ items }) => {
    const { t } = useI18n();
    const { scheme } = useScheme();

    return (
        <ul className="mx-auto post-list flex gap-4">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="post-list-item relative bordered flex justify-between gap-4"
                >
                    <div className="flex flex-col gap-2 w-full p-5 p-5 ">
                        <Tags tags={item.categories} />
                        <div className="flex">
                            <span>
                                {item.title}{" "}
                                <span className="font-light">
                                    {item.album ? ` - ${item.album}` : null}
                                </span>
                            </span>
                        </div>
                        <iframe
                            className="w-full h-[120px]"
                            style={{
                                border: "0",
                                borderRadius: scheme === "dark" ? 8 : 0,
                                outline:
                                    scheme === "dark"
                                        ? "2px solid #161616"
                                        : "",
                                outlineOffset: -1,
                            }}
                            src={`https://bandcamp.com/EmbeddedPlayer/${item.src}/size=large/${scheme === "dark" ? "bgcol=333333" : "bgcol=fff"}/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/`}
                            seamless
                        />
                        <span className="post-list-item-releaseDate text-xs ml-auto leading-6 clr-grey ml-auto">
                            {t("releaseDate")} :{" "}
                            <span className="italic">
                                {formatDate({
                                    isoString: item.release_date,
                                })}
                            </span>
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};
export default MusicPosts;
