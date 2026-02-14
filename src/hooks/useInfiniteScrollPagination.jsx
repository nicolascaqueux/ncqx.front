import { useEffect, useState } from "react";

const useInfiniteScrollPagination = () => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.offsetHeight;

            if (scrollY + windowHeight >= fullHeight - 300) {
                setPage((prev) => prev + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return page;
};

export default useInfiniteScrollPagination;
