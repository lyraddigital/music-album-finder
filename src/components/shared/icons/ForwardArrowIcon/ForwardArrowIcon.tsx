import style from './ForwardArrowIcon.module.scss';

const ForwardArrowIcon = (props: any) => {
    let arrowClassName = style.arrowIcon;
    arrowClassName += props.disabled ? ` ${style.disabled}`: '';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className={arrowClassName}>
            <path d="M8,21.15l-.65-.76,9.55-8.16L7.31,4.07,8,3.31,18.4,12.23"></path>
        </svg>
    );
};

export default ForwardArrowIcon;
