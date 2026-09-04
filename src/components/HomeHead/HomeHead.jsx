const HomeHead = ({ title, description }) => (
  <div id='home-head' className='mx-auto mb-12 max-w-[800px]'>
    <div>
      {title && <h1 className='mb-12'>{title}</h1>}
      {description && <p>{description}</p>}
    </div>
  </div>
)

export default HomeHead
