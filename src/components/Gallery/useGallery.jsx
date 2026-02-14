import { useEffect, useMemo, useRef, useState } from "react";
import useInfiniteScrollPagination from "../../hooks/useInfiniteScrollPagination";

const spacing = 8;
const containerPadding = 16;
const targetRowHeight = 300;
const MAX_IMAGES_PER_ROW = 6;
const maxRowHeight = 400;

const useGallery = ({ items }) => {
    const [rows, setRows] = useState([]);
    const containerRef = useRef(null);
    const page = useInfiniteScrollPagination();

    // Memoize image data with pre-parsed aspect
    const parsedImages = useMemo(() => {
        return items.map((item) => {
            const src = import.meta.env.VITE_API_URL + item.thumbnail?.url;
            const aspect =
                item.aspect_ratio === "vertical"
                    ? 2 / 3
                    : item.aspect_ratio === "horizontal"
                      ? 3 / 2
                      : 1; // fallback to square
            return {
                src,
                aspect,
                uid: item.uid,
            };
        });
    }, [items]);

    useEffect(() => {
        const containerWidth =
            containerRef.current?.offsetWidth ??
            window.innerWidth - containerPadding * 2;
        const rows = buildRows(parsedImages, containerWidth);
        setRows(rows);
    }, [parsedImages]);

    const buildRows = (images, containerWidth) => {
        let rows = [];
        let currentRow = [];
        let currentAspectSum = 0;

        for (const img of images) {
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
        page,
        rows,
        spacing,
        zoomedInImg,
    };
};

export default useGallery;
