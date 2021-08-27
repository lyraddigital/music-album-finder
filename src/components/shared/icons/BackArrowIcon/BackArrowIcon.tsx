import style from './BackArrowIcon.module.scss';

const BackArrowIcon = (props: any) => {
    let arrowClassName = style.arrowIcon;

    arrowClassName += props.disabled ? ` ${style.disabled}`: '';

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className={arrowClassName}>
            <path d="M4.31,11.23l10.4-8.92.69.76L5.81,11.23l9.55,8.16-.65.76" />
        </svg>
    );
};

export default BackArrowIcon;
