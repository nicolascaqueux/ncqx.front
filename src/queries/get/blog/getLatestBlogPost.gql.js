import { gql } from "@apollo/client";

const GET_LATEST_BLOG_POST = gql`
    query GetBlogPosts($limit: Int!) {
        blogPosts(pagination: { limit: $limit }, sort: ["createdAt:desc"]) {
            createdAt
            categories {
                name
            }
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

export default GET_LATEST_BLOG_POST;
