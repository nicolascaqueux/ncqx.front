import { Link, useLocation } from "react-router-dom";

const Tags = ({ tags }) => {
    const { pathname } = useLocation();

    if (!tags?.length)
        return <span className="tag text-xs capitalize mr-auto">Other</span>;

    const tagList = tags.map((tag, index) => (
        <Link
            to={`/${pathname.split("/")[1]}?${tag.name.toLowerCase()}`} // todo will be problematic if space or special char in tag
            key={index}
            className="tag text-xs capitalize"
        >
            {tag.name}
        </Link>
    ));

    return <div className="flex gap-2">{tagList}</div>;
};

export default Tags;
