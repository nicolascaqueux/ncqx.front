import { Link } from "react-router-dom";

const Logo = () => (
    <Link to="/" className="logo font-light py-2 pr-4 my-auto">
        <span className="clr-primary" aria-hidden="true">
            @&nbsp;
        </span>
        Nicolas Caqueux
    </Link>
);

export default Logo;
