import { gql } from "@apollo/client";

const GET_MUSIC_POSTS = gql`
    query GetMusicPosts($filters: MusicPostFiltersInput) {
        musicPosts(filters: $filters) {
            album
            categories {
                name
            }
            createdAt
            isAlbum
            release_date
            src
            title
        }
    }
`;

export default GET_MUSIC_POSTS;
