import style from './SideBar.module.scss';

import homeSmallImage from "../../../../images/icons/home/home-small.svg";
import homeImage from "../../../../images/icons/home/home.svg";

const SideBar = () => {
    return (
        <div id={style.sideBar}>
            <picture>
                <source srcSet={homeImage} media="(min-width: 1024px)" />
                <img src={homeSmallImage} alt="Home" />
            </picture>
        </div>
    );
};

export default SideBar;
