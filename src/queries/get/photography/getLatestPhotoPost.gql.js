import { gql } from "@apollo/client";

const GET_LATEST_PHOTO_POST = gql`
    query GetPhotoPosts($limit: Int!) {
        photoPosts(pagination: { limit: $limit }, sort: ["createdAt:desc"]) {
            createdAt
            uid
            thumbnail {
                url
                alternativeText
            }
        }
    }
`;

export default GET_LATEST_PHOTO_POST;
