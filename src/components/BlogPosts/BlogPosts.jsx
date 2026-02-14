import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate.jsx";
import Icon from "../Icon";
import Tags from "../Tags";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

/**
 * @component
 * @param {object} items - Blog Posts
 * @returns {JSX.Element}
 */

const BlogPosts = ({ items }) => (
    <ul className="mx-auto post-list flex gap-4">
        {items.map((item, index) => (
            <li
                key={index}
                className="post-list-item min-h-[283px] relative bordered flex justify-between gap-4"
            >
                <div className="flex flex-col gap-8 basis-8/12 p-5">
                    <Tags tags={item.categories} />
                    <p className="post-list-item-createdAt absolute text-xs mt-auto ml-auto italic clr-grey leading-6">
                        {formatDate({
                            isoString: item.createdAt,
                            clocked: true,
                        })}
                    </p>
                    <h3>{item.title}</h3>
                    <p className="post-list-item-description">
                        {item.description}
                    </p>
                    <Link
                        to={`/blog/${item.uid}`}
                        className="post-list-item-link flex items-center gap-2 mt-auto link-small"
                    >
                        Read post <Icon height={12} icon="chevron" width={12} />
                    </Link>
                </div>
                <div className="flex flex-col gap-3 basis-4/12 p-1">
                    <img
                        src={`${BACKEND_URL}${item.thumbnail.url}` || ""}
                        alt={item.thumbnail.alternativeText || ""}
                    />
                </div>
            </li>
        ))}
    </ul>
);

BlogPosts.propTypes = {
    items: PropTypes.object.isRequired,
};

export default BlogPosts;
