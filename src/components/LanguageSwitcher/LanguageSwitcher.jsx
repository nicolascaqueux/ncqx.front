import { useI18n } from '../../lib/i18nContext'
import franceFlagIcon from '../../assets/icons/flag_france.png'
import ukFlagIcon from '../../assets/icons/flag_uk.png'
import Icon from '../Icon'

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n()

  return (
    <button
      className='language-siwtcher align-center flex w-[100%] justify-between'
      title={lang === 'en' ? 'Changer la langue en français' : 'Change language to english'}
      onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
    >
      <Icon height={20} src={lang === 'en' ? franceFlagIcon : ukFlagIcon} width={20} />
    </button>
  )
}

export default LanguageSwitcher
