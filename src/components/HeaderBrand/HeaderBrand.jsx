import avatar from "../../assets/avatar.jpg";
import Logo from "../Logo";

const HeaderBrand = () => (
    <>
        <Logo />
        <img
            src={avatar}
            className="avatar h-[36px] w-[36px] rounded-[100%]"
            alt=""
        />
    </>
);

export default HeaderBrand;
