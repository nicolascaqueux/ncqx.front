import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const GoToContent = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.setAttribute('tabindex', '-1')
    }
  }, [pathname])

  return (
    <div className='go-to-content absolute top-0 mx-auto w-[100%]'>
      <nav aria-label='Quick access' className='mx-auto w-[100%] max-w-[800px] py-4'>
        <ul className='flex gap-8'>
          <li>
            <Link className='px-3 py-2' to='#content'>
              Content
            </Link>
          </li>
          <li>
            <Link className='px-3 py-2' to='#footer'>
              Footer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default GoToContent
