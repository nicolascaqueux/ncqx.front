import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import GET_BLOG_POST from '../../queries/get/blog/getBlogPost.gql.js'
import formatDate from '../../utils/formatDate'
import PageNotFound from '../../pages/PageNotFound'
import CatalogContentError from '../../components/Catalog/CatalogContent/CatalogContentError'
import LoadingSpinner from '../../components/LoadingSpinner'
import MainHead from '../../components/MainHead'
import Tags from '../../components/Tags'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

const BlogPost = () => {
  const { pathname } = useLocation()

  const { loading, error, data } = useQuery(GET_BLOG_POST, {
    variables: {
      uid: pathname.split('blog/')[1],
    },
  })

  if (loading) return <LoadingSpinner />
  if (error) return <CatalogContentError />
  if (!data || !data.blogPosts[0]) return <PageNotFound />

  const blogPost = data.blogPosts[0]

  return (
    <div id='blog-post'>
      <MainHead title={blogPost.title} />
      <div className='mx-auto w-[800px]'>
        <div className='mt-2 flex items-center justify-between'>
          <Tags tags={blogPost.categories} />
          <div>
            <span>Publié le {formatDate({ isoString: blogPost.createdAt })}</span>
            {/* todo
                            <span> - </span>
                            <span>X minutes read</span>
                        */}
          </div>
        </div>
        <div className='flex justify-end'></div>
        <div className='my-12 flex justify-center'>
          <img
            className='w-[100%]'
            src={`${BACKEND_URL}${blogPost.cover.url}` || ''}
            alt={blogPost.cover.alternativeText || ''}
          />
        </div>
      </div>
      <div className='mx-auto max-w-[800px] text-xl'>{blogPost.content}</div>
    </div>
  )
}

export default BlogPost
