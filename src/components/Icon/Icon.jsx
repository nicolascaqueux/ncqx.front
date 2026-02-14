import iconMap from "../../utils/iconsMap";

const Icon = ({ height = 18, icon, src, width = 18 }) => {
    let entry = src || (icon && iconMap.find((i) => i.name === icon).base64);

    if (!entry) return null;

    return (
        <img
            src={entry}
            aria-hidden="true"
            className="icon"
            height={height}
            width={width}
            alt=""
        />
    );
};

export default Icon;
