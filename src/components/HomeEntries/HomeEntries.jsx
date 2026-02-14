import { useQuery } from "@apollo/client";
import GET_LATEST_PHOTO_POST from "../../queries/get/photography/getLatestPhotoPost.gql.js";
import GET_LATEST_MUSIC_POST from "../../queries/get/music/getLatestMusicPost.gql.js";
import GET_LATEST_BLOG_POST from "../../queries/get/blog/getLatestBlogPost.gql.js";
import CatalogContentError from "../Catalog/CatalogContent/CatalogContentError";
import LoadingSpinner from "../LoadingSpinner";
import HomeEntryBlog from "./HomeEntry/HomeEntryBlog";
import HomeEntryMusic from "./HomeEntry/HomeEntryMusic";
import HomeEntryPhotography from "./HomeEntry/HomeEntryPhotography";

const HomeEntries = () => {
    const {
        data: latestPhotoPostData,
        error: latestPhotoPostError,
        loading: latestPhotoPostLoading,
    } = useQuery(GET_LATEST_PHOTO_POST, { variables: { limit: 7 } });

    const {
        data: latestMusicPostData,
        error: latestMusicPostError,
        loading: latestMusicPostLoading,
    } = useQuery(GET_LATEST_MUSIC_POST, { variables: { limit: 7 } });

    const {
        data: latestBlogPostData,
        error: latestBlogPostError,
        loading: latestBlogPostLoading,
    } = useQuery(GET_LATEST_BLOG_POST, { variables: { limit: 3 } });

    const loading =
        latestPhotoPostLoading ||
        latestMusicPostLoading ||
        latestBlogPostLoading;

    const error =
        latestPhotoPostError || latestMusicPostError || latestBlogPostError;

    if (loading) return <LoadingSpinner />;
    if (error) return <CatalogContentError />;

    return (
        <div
            id="home-entrys"
            className="max-w-[800px] mx-auto flex flex-wrap gap-12 mt-12 pt-6"
        >
            <HomeEntryPhotography posts={latestPhotoPostData.photoPosts} />
            <HomeEntryMusic posts={latestMusicPostData.musicPosts} />
            <HomeEntryBlog posts={latestBlogPostData.blogPosts} />
        </div>
    );
};

export default HomeEntries;
