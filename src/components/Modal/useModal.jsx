import { useEffect, useRef } from "react";

const useModal = ({ isOpen, toggleModal }) => {
    const modalRef = useRef(null);

    const getFocusables = (ref) => {
        const selectors = [
            '[tabindex]:not([tabindex="-1"])',
            "a[href]",
            "button:not([disabled])",
            "textarea:not([disabled])",
            "input:not([disabled])",
            "select:not([disabled])",
        ];

        return Array.from(ref.querySelectorAll(selectors.join()));
    };

    const handleKeyDowns = (e) => {
        if (e.key === "Escape") {
            toggleModal();
        }

        if (e.key === "Tab" && modalRef.current) {
            const focusables = getFocusables(modalRef.current);

            if (!focusables.length) return;

            const firstFocusable = focusables[0];
            const lastFocusable = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (
                !e.shiftKey &&
                document.activeElement === lastFocusable
            ) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    };

    useEffect(() => {
        if (isOpen && modalRef.current) {
            const focusables = getFocusables(modalRef.current);

            if (focusables.length) {
                focusables[0].focus();
            }
        }

        document.addEventListener("keydown", handleKeyDowns);

        return () => {
            document.removeEventListener("keydown", handleKeyDowns);
        };
    }, [isOpen]);

    return {
        modalRef,
    };
};

export default useModal;
