import MainHead from '../MainHead/MainHead'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

const BlogPost = ({ blogPost }) => (
  <>
    <MainHead title={blogPost.title} />
    <div class='mx-auto my-12 flex justify-center'>
      <img
        src={`${BACKEND_URL}${blogPost.cover.url}` || ''}
        alt={blogPost.cover.alternativeText || ''}
      />
    </div>
    <div class='blog-post-content mx-auto max-w-[800px]'>{blogPost.content}</div>
  </>
)

export default BlogPost
