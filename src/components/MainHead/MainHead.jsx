import Breadcrumbs from '../Breadcrumbs'

const MainHead = ({ title }) =>
  title && (
    <>
      <div className='main-head mx-auto max-w-[800px] pb-6'>
        <Breadcrumbs />
        <h1 className='mx-auto text-3xl'>{title}</h1>
      </div>
    </>
  )

export default MainHead
