import { gql } from "@apollo/client";

const GET_PHOTO_POST = gql`
    query GetPhotoPost($uid: String!) {
        photoPosts(filters: { uid: { eq: $uid } }) {
            uid
            photo {
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

export default GET_PHOTO_POST;
