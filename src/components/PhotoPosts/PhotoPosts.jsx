import PhotoPostModal from "../PhotoPostModal";
import usePhotoPosts from "./usePhotoPosts";

const PhotoPosts = ({ items }) => {
    const {
        containerRef,
        handleImgClick,
        hasShotParams,
        maxRowHeight,
        openedPost,
        rows,
        spacing,
    } = usePhotoPosts({ items });

    const grid = rows.map((row, i) => {
        let containerWidth = containerRef.current?.offsetWidth ?? 1000;
        const calculatedRowHeight =
            (containerWidth - (row.images.length - 1) * spacing) /
            row.aspectSum;

        // Limit height to maxRowHeight
        const rowHeight = Math.min(calculatedRowHeight, maxRowHeight);

        return (
            <div className="row flex mb-2" key={i}>
                {row.images.map((img, j) => {
                    let width = img.aspect * rowHeight;

                    return (
                        <img
                            key={j}
                            id={img.uid}
                            src={img.src}
                            alt=""
                            onClick={() => handleImgClick(img)}
                            style={{
                                width: `${width}px`,
                                height: `${rowHeight}px`,
                                marginRight:
                                    j !== row.images.length - 1 ? spacing : 0,
                            }}
                        />
                    );
                })}
            </div>
        );
    });

    return (
        <>
            <div className="gallery w-[100%]" ref={containerRef}>
                {grid}
            </div>
            {openedPost && (
                <PhotoPostModal
                    closeModal={handleImgClick}
                    hasShotParams={hasShotParams}
                    shoudShowDescription={openedPost?.location || hasShotParams}
                    uid={openedPost.uid}
                />
            )}
        </>
    );
};

export default PhotoPosts;
