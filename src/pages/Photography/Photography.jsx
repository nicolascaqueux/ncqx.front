import GET_PHOTO_POSTS from "../../queries/get/photography/getPhotoPosts.gql.js";
import Catalog from "../../components/Catalog";
import Filters from "../../components/Filters";
import PhotoPosts from "../../components/PhotoPosts";

const Photography = () => (
    <>
        <Filters page="photography" />
        <Catalog
            dataKey="photoPosts"
            query={GET_PHOTO_POSTS}
            render={(items) => <PhotoPosts items={items} />}
        />
    </>
);

export default Photography;
