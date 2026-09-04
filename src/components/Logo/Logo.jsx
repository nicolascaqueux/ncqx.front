import { Link } from 'react-router-dom'

const Logo = () => (
  <Link to='/' className='logo my-auto py-2 pr-4 font-light'>
    <span className='clr-primary' aria-hidden='true'>
      @&nbsp;
    </span>
    Nicolas Caqueux
  </Link>
)

export default Logo
