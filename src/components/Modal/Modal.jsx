import { useI18n } from "../../lib/i18nContext.jsx";
import Icon from "../Icon";
import useModal from "./useModal.jsx";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

const Modal = ({ children, id, isOpen, toggleModal }) => {
    const { modalRef } = useModal({ isOpen, toggleModal });
    const { t } = useI18n();
    window.scrollTo({ top: 0, behavior: "smooth" });
    useLockBodyScroll(isOpen);

    return (
        <dialog
            aria-labelledby={id}
            aria-modal={isOpen}
            className={`modal-container absolute ${children.filter((child) => child !== null).length < 2 ? "flex items-center" : ""}`}
            id={id}
            open={isOpen}
            onClick={() => toggleModal()}
            ref={modalRef}
        >
            <div className="modal relative m-auto my-8 flex">
                <button
                    type="button"
                    className="modal-close-btn p-2 mx-auto"
                    title={t("closeModal")}
                    onClick={() => toggleModal()}
                >
                    <Icon height={24} icon="close" width={24} />
                </button>
                <div className="modal-body flex items-stretch h-full w-full">
                    {children}
                </div>
            </div>
        </dialog>
    );
};

export default Modal;
