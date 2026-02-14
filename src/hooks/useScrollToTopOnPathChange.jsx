import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTopOnPathChange = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollTimeout = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 0);

        return () => clearTimeout(scrollTimeout);
    }, [pathname]);
};

export default useScrollToTopOnPathChange;
