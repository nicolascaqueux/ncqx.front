import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import formatDate from '../../utils/formatDate.jsx'
import Icon from '../Icon'
import Tags from '../Tags'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

/**
 * @component
 * @param {object} items - Blog Posts
 * @returns {JSX.Element}
 */

const BlogPosts = ({ items }) => (
  <ul className='post-list mx-auto flex gap-4'>
    {items.map((item, index) => (
      <li
        key={index}
        className='post-list-item bordered relative flex min-h-[283px] justify-between gap-4'
      >
        <div className='flex basis-8/12 flex-col gap-8 p-5'>
          <Tags tags={item.categories} />
          <p className='post-list-item-createdAt clr-grey absolute ml-auto mt-auto text-xs italic leading-6'>
            {formatDate({
              isoString: item.createdAt,
              clocked: true,
            })}
          </p>
          <h3>{item.title}</h3>
          <p className='post-list-item-description'>{item.description}</p>
          <Link
            to={`/blog/${item.uid}`}
            className='post-list-item-link link-small mt-auto flex items-center gap-2'
          >
            Read post <Icon height={12} icon='chevron' width={12} />
          </Link>
        </div>
        <div className='flex basis-4/12 flex-col gap-3 p-1'>
          <img
            src={`${BACKEND_URL}${item.thumbnail.url}` || ''}
            alt={item.thumbnail.alternativeText || ''}
          />
        </div>
      </li>
    ))}
  </ul>
)

BlogPosts.propTypes = {
  items: PropTypes.object.isRequired,
}

export default BlogPosts
