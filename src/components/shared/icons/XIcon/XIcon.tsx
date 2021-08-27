import style from './XIcon.module.scss';

const XIcon = (props: any) => {
    const className = props.isWhite ? style.whiteStroke: style.blackStroke;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
            <path d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93" fill="none" strokeMiterlimit="10"></path> { /*  [ngClass]="isWhite ? 'whiteStroke' : 'blackStroke'" */}
            <polygon points="6 8.13 6.84 7.28 7.55 8 6.78 8.74 6 8.13"></polygon>
        </svg>
    );
};

export default XIcon;
