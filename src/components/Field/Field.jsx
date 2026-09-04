const Field = ({ checked, handleFieldChange, id, label, type }) => {
  switch (type) {
    case 'checkbox':
      return (
        <div className='filter-input relative flex flex-row-reverse items-center gap-3 px-4 py-2'>
          <input
            type={type}
            name={id}
            id={id}
            checked={checked}
            onChange={(e) => handleFieldChange(e)}
          />
          <label className='relative pl-7' htmlFor={id}>
            {label}
          </label>
        </div>
      )
  }
}

export default Field
