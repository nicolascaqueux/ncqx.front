import Icon from '../Icon'

const MenuBurger = ({ icon, toggleMenu }) => (
  <nav aria-label='main menu' id='menu-burger' className='ml-auto'>
    <button
      aria-controls='menu'
      className='clr-primary ml-auto flex h-[36px] w-[36px] cursor-pointer items-center justify-center p-1'
      id='burger'
      title='Menu'
      type='button'
      onClick={toggleMenu}
    >
      <Icon height={36} icon={icon} width={36} />
    </button>
  </nav>
)

export default MenuBurger
