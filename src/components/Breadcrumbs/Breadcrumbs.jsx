import { Link, useLocation } from "react-router-dom";
import Icon from "../Icon";

const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const isBlogPost = pathname.includes("/blog/");

    return (
        isBlogPost && (
            <div className="breadcrumbs mb-12 flex gap-2">
                <Icon height="12" icon="chevron" width="12" />
                <span>
                    <Link to="/blog" className="underline">
                        {` `}Blog
                    </Link>
                </span>
            </div>
        )
    );
};
export default Breadcrumbs;
