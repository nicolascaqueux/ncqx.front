import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const GoToContent = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const root = document.getElementById("root");
        if (root) {
            root.setAttribute("tabindex", "-1");
        }
    }, [pathname]);
    
    return (
        <div className="go-to-content mx-auto absolute top-0 w-[100%]">
            <nav
                aria-label="Quick access"
                className="max-w-[800px] w-[100%] mx-auto py-4"
            >
                <ul className="flex  gap-8">
                    <li>
                        <Link className="py-2 px-3" to="#content">
                            Content
                        </Link>
                    </li>
                    <li>
                        <Link className="py-2 px-3" to="#footer">
                            Footer
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default GoToContent;
