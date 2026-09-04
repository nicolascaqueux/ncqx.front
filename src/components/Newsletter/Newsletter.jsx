import { useI18n } from '../../lib/i18nContext'
import Icon from '../../components/Icon/Icon'

const Newsletter = () => {
  const { t } = useI18n()

  return (
    <div id='newsletter'>
      <div className='pb-13 mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pt-12'>
        <div className='mx-auto w-[100%] max-w-[800px]'>
          <div className='flex flex-1'>
            <h2 className='pb-2'>Newsletter</h2>
          </div>
          <div className='flex flex-col'>
            <p className='flex items-start gap-2 text-sm'>
              <Icon height={18} icon='newsletter' width={18} />
              {t('newsletter')}
            </p>
            <hr />
            <form className='my-auto flex gap-4'>
              <input type='email' placeholder='Your e-mail' />
              <button type='submit'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
