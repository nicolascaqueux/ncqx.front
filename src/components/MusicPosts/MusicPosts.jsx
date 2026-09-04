import { useI18n } from '../../lib/i18nContext.jsx'
import { useScheme } from '../../lib/schemeContext'
import formatDate from '../../utils/formatDate.jsx'
import Tags from '../Tags'

const MusicPosts = ({ items }) => {
  const { t } = useI18n()
  const { scheme } = useScheme()

  return (
    <ul className='post-list mx-auto flex gap-4'>
      {items.map((item, index) => (
        <li key={index} className='post-list-item bordered relative flex justify-between gap-4'>
          <div className='flex w-full flex-col gap-2 p-5'>
            <Tags tags={item.categories} />
            <div className='flex'>
              <span>
                {item.title}{' '}
                <span className='font-light'>{item.album ? ` - ${item.album}` : null}</span>
              </span>
            </div>
            <iframe
              className='h-[120px] w-full'
              style={{
                border: '0',
                borderRadius: scheme === 'dark' ? 8 : 0,
                outline: scheme === 'dark' ? '2px solid #161616' : '',
                outlineOffset: -1,
              }}
              src={`https://bandcamp.com/EmbeddedPlayer/${item.src}/size=large/${scheme === 'dark' ? 'bgcol=333333' : 'bgcol=fff'}/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/`}
              seamless
            />
            <span className='post-list-item-releaseDate clr-grey ml-auto text-xs leading-6'>
              {t('releaseDate')} :{' '}
              <span className='italic'>
                {formatDate({
                  isoString: item.release_date,
                })}
              </span>
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
export default MusicPosts
