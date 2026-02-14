import { gql } from "@apollo/client";

const GET_BLOG_POSTS = gql`
    query GetBlogPosts($filters: BlogPostFiltersInput) {
        blogPosts(filters: $filters) {
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

export default GET_BLOG_POSTS;
