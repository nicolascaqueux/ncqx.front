import { gql } from "@apollo/client";

const GET_LATEST_MUSIC_POST = gql`
    query GetMusicPosts($limit: Int!) {
        musicPosts(pagination: { limit: $limit }, sort: ["createdAt:desc"]) {
            createdAt
            categories {
                name
            }
            isAlbum
            src
            release_date
            thumbnail {
                url
                alternativeText
            }
            title
        }
    }
`;

export default GET_LATEST_MUSIC_POST;
