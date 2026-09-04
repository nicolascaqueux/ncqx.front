import { useI18n } from '../../../../lib/i18nContext.jsx'
import LoadingSpinner from '../../../LoadingSpinner/LoadingSpinner.jsx'

const CatalogContentLoading = () => {
  const { t } = useI18n()

  return (
    <h2 className='mx-auto flex max-w-[800px] flex-col'>
      <span className='sr-only'>{t('loading')}</span>
      <LoadingSpinner />
    </h2>
  )
}

export default CatalogContentLoading
