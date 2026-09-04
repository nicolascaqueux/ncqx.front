import { useState } from 'react'
import Navbar from '../../components/Navbar'
import MenuBurger from '../../components/MenuBurger'
import Menu from '../../components/Menu'
import HeaderBrand from '../../components/HeaderBrand'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className='sticky top-0 z-[1] mx-auto flex px-6 py-4'>
      <div className='header-desktop-content mx-auto flex w-[800px] items-center justify-center gap-4'>
        <HeaderBrand />
        <MenuBurger icon='menu' toggleMenu={toggleMenu} />
        <Navbar />
      </div>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  )
}

export default Header
