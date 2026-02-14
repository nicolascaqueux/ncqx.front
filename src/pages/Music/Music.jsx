import GET_MUSIC_POSTS from "../../queries/get/music/getMusicPosts.gql.js";
import Catalog from "../../components/Catalog";
import Filters from "../../components/Filters";
import MusicPosts from "../../components/MusicPosts";

const Music = () => (
    <>
        <Filters page="music" />
        <Catalog
            dataKey="musicPosts"
            query={GET_MUSIC_POSTS}
            render={(items) => <MusicPosts items={items} />}
        />
    </>
);

export default Music;
