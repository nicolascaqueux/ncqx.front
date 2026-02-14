import Icon from "../Icon";

const MenuBurger = ({ icon, toggleMenu }) => (
    <nav
        aria-label="main menu"
        id="menu-burger"
        className="ml-auto"
    >
        <button
            aria-controls="menu"
            className="clr-primary w-[36px] h-[36px] flex justify-center items-center ml-auto cursor-pointer p-1"
            id="burger"
            title="Menu"
            type="button"
            onClick={toggleMenu}
        >
            <Icon height={36} icon={icon} width={36} />
        </button>
    </nav>
);

export default MenuBurger;
