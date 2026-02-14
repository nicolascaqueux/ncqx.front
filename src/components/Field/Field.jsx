const Field = ({ checked, handleFieldChange, id, label, type }) => {
    switch (type) {
        case "checkbox":
            return (
                <div className="filter-input relative flex flex-row-reverse items-center gap-3 py-2 px-4">
                    <input
                        type={type}
                        name={id}
                        id={id}
                        checked={checked}
                        onChange={(e) => handleFieldChange(e)}
                    />
                    <label className="pl-7 relative" htmlFor={id}>
                        {label}
                    </label>
                </div>
            );
    }
};

export default Field;
