import GET_BLOG_POSTS from "../../queries/get/blog/getBlogPosts.gql.js";
import BlogPosts from "../../components/BlogPosts";
import Catalog from "../../components/Catalog";
import Filters from "../../components/Filters";

const Blog = () => (
    <>
        <Filters page="blog" />
        <Catalog
            dataKey="blogPosts"
            query={GET_BLOG_POSTS}
            render={(items) => <BlogPosts items={items} />}
        />
    </>
);

export default Blog;
