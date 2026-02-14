import { useEffect, useState, useRef, useMemo } from "react";
import loadImage from "blueimp-load-image";
import useInfiniteScrollPagination from "../../hooks/useInfiniteScrollPagination";

const spacing = 8;
const containerPadding = 16;
const targetRowHeight = 300;
const MAX_IMAGES_PER_ROW = 6;
const maxRowHeight = 400;
const IMAGES_PER_PAGE = 24;

const usePhotoGallery = () => {
    const [rows, setRows] = useState([]);
    const containerRef = useRef(null);
    const page = useInfiniteScrollPagination();

    // Dynamically import all images at build time
    const imagesModules = import.meta.glob(
        "../../../../../../../Pictures/SELECTED/*.{jpg,png}",
        { eager: true },
    );

    const imageSources = useMemo(() => {
        return Object.values(imagesModules).map((mod) => mod.default);
    }, []);

    useEffect(() => {
        const loadImages = async () => {
            const allSources = Object.values(imagesModules)
                .map((mod) => mod.default)
                .slice(0, page * IMAGES_PER_PAGE);

            const promises = allSources.map(
                (src) =>
                    new Promise((resolve) => {
                        loadImage(
                            src,
                            (img, data) => {
                                const orientation =
                                    data.exif?.get("Orientation");
                                const originalWidth = data.originalWidth;
                                const originalHeight = data.originalHeight;

                                const isRotated =
                                    orientation >= 5 && orientation <= 8;
                                const width = isRotated
                                    ? originalHeight
                                    : originalWidth;
                                const height = isRotated
                                    ? originalWidth
                                    : originalHeight;

                                resolve({
                                    src,
                                    width,
                                    height,
                                    aspect: width / height,
                                });
                            },
                            { meta: true, orientation: true },
                        );
                    }),
            );

            const loaded = await Promise.all(promises);
            const containerWidth =
                containerRef.current?.offsetWidth ??
                window.innerWidth - containerPadding * 2;
            const rows = buildRows(loaded, containerWidth);
            setRows(rows);
        };

        loadImages();
    }, [page, imageSources]);

    const buildRows = (images, containerWidth) => {
        let rows = [];
        let currentRow = [];
        let currentAspectSum = 0;

        for (const img of images) {
            // If currentRow is full, push it and start new one
            if (currentRow.length === MAX_IMAGES_PER_ROW) {
                rows.push({ images: currentRow, aspectSum: currentAspectSum });
                currentRow = [];
                currentAspectSum = 0;
            }

            currentRow.push(img);
            currentAspectSum += img.aspect;

            const totalWidth =
                currentAspectSum * targetRowHeight +
                (currentRow.length - 1) * spacing;

            if (totalWidth > containerWidth) {
                rows.push({ images: currentRow, aspectSum: currentAspectSum });
                currentRow = [];
                currentAspectSum = 0;
            }
        }

        if (currentRow.length) {
            rows.push({ images: currentRow, aspectSum: currentAspectSum });
        }

        return rows;
    };
    
    const [zoomedInImg, setZoomedInImg] = useState(null);
    const handleImgClick = (el) => setZoomedInImg(el);

    return {
        containerRef,
        handleImgClick,
        maxRowHeight,
        rows,
        spacing,
        zoomedInImg,
    };
};

export default usePhotoGallery;
