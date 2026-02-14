import MainHead from "../MainHead/MainHead";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

const BlogPost = ({ blogPost }) => (
    <>
        <MainHead title={blogPost.title} />
        <div class="flex justify-center mx-auto my-12">
            <img
                src={`${BACKEND_URL}${blogPost.cover.url}` || ""}
                alt={blogPost.cover.alternativeText || ""}
            />
        </div>
        <div class="max-w-[800px] mx-auto blog-post-content">
            {blogPost.content}
        </div>
    </>
);

export default BlogPost;
