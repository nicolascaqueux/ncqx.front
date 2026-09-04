import { useI18n } from '../../../../lib/i18nContext.jsx'

const CatalogContentEmpty = () => {
  const { t } = useI18n()

  return <h2 className='mx-auto max-w-[800px]'>{t('noResult')}</h2>
}

export default CatalogContentEmpty
