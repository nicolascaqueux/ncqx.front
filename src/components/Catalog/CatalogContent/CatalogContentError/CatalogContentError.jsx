import { useI18n } from '../../../../lib/i18nContext.jsx'

const CatalogContentError = () => {
  const { t } = useI18n()

  return <h2 className='mx-auto max-w-[800px]'>{t('errorLoadingData')} </h2>
}

export default CatalogContentError
