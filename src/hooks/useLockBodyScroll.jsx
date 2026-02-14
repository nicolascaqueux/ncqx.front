import { useEffect } from "react";

const useLockBodyScroll = (shouldLock = true) => {
    useEffect(() => {
        if (!shouldLock) return;

        const originalStyle = window.getComputedStyle(document.body).overflowY;
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = originalStyle;
        };
    }, [shouldLock]);
};

export default useLockBodyScroll;
