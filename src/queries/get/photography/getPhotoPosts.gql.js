import { gql } from "@apollo/client";

const GET_PHOTO_POSTS = gql`
    query GetPhotoPosts($filters: PhotoPostFiltersInput) {
        photoPosts(filters: $filters) {
            createdAt
            categories {
                name
            }
            uid
            thumbnail {
                url
                alternativeText
            }
            location
            aspect_ratio
            focal_length
            aperture
            shutter_speed
            iso
        }
    }
`;

export default GET_PHOTO_POSTS;
