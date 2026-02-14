import GET_PHOTO_POSTS from "../../queries/get/photography/getPhotoPosts.gql.js";
import useCatalog from "../Catalog/useCatalog.jsx";
import CatalogContentLoading from "../Catalog/CatalogContent/CatalogContentLoading";
import CatalogContentError from "../Catalog/CatalogContent/CatalogContentError";
import CatalogContentEmpty from "../Catalog/CatalogContent/CatalogContentEmpty";
import GalleryContent from "./GalleryContent";

const Gallery = () => {
    const { data, error, loading } = useCatalog({ query: GET_PHOTO_POSTS });

    if (loading) return <CatalogContentLoading />;
    if (error) return <CatalogContentError />;
    if (!data?.photoPosts?.length) return <CatalogContentEmpty />;

    return <GalleryContent items={data?.photoPosts} />;
};

export default Gallery;
