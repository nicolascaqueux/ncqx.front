import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { useI18n } from "../../lib/i18nContext";
import Modal from "../Modal";
import GET_PHOTO_POST from "../../queries/get/photography/getPhotoPost.gql";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import CatalogContentError from "../Catalog/CatalogContent/CatalogContentError";

const PhotoPostModal = ({
    closeModal,
    hasShotParams,
    shoudShowDescription,
    uid,
}) => {
    const { t } = useI18n();

    const { loading, error, data } = useQuery(GET_PHOTO_POST, {
        variables: { uid },
    });

    const post = useMemo(
        () => (data?.photoPosts ? data?.photoPosts[0] : null),
        [data],
    );

    if (loading) return <LoadingSpinner />;
    if (error) return <CatalogContentError />;

    return (
        <Modal
            id={post.id}
            isOpen={post ? true : false}
            toggleModal={closeModal}
        >
            <div
                className={`gallery-modal-image-container w-full cursor-pointer ${shoudShowDescription ? "basis-9/12" : "basis-full"}`}
            >
                {post?.photo?.url ? (
                    <img
                        src={`${import.meta.env.VITE_API_URL}${post.photo?.url}`}
                        className="h-full m-auto object-contain"
                        onClick={() => closeModal(null)}
                    />
                ) : (
                    <CatalogContentError />
                )}
            </div>
            {shoudShowDescription && (
                <div className="gallery-modal-description flex flex-col py-4 px-6">
                    {post.location && (
                        <div className="shot-location">
                            <p className="font-semibold mb-2">
                                {t("postLocation")}
                            </p>
                            <p className="clr-primary px-2">{post.location}</p>
                        </div>
                    )}
                    <hr />
                    {hasShotParams && (
                        <div className="shot-params">
                            <p className="font-semibold mb-2">
                                {t("parameters")}
                            </p>
                            <ul className="px-2">
                                {post.focal_length && (
                                    <li>
                                        <span>{t("focalLength")} :</span>
                                        <span className="clr-primary">
                                            {" "}
                                            {post.focal_length}
                                            mm
                                        </span>
                                    </li>
                                )}
                                {post.aperture && (
                                    <li>
                                        <span>{t("aperture")} :</span>
                                        <span className="clr-primary">
                                            {" "}
                                            f/{post.aperture}
                                        </span>
                                    </li>
                                )}
                                {post.shutter_speed && (
                                    <li>
                                        <span>{t("shutterSpeed")} :</span>
                                        <span className="clr-primary">
                                            {" "}
                                            {post.shutter_speed}s
                                        </span>
                                    </li>
                                )}
                                {post.iso && (
                                    <li>
                                        <span>{t("iso")} :</span>
                                        <span className="clr-primary">
                                            {" "}
                                            {post.iso}
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    <hr />
                </div>
            )}
        </Modal>
    );
};

export default PhotoPostModal;
