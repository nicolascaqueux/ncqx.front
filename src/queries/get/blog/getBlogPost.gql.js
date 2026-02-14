import { gql } from "@apollo/client";

const GET_BLOG_POST = gql`
    query getBlogPost($uid: String!) {
        blogPosts(filters: { uid: { eq: $uid } }) {
            categories {
                name
            }
            content
            cover {
                url
                alternativeText
            }
            createdAt
            description
            uid
            thumbnail {
                url
                alternativeText
            }
            title
        }
    }
`;

export default GET_BLOG_POST;
