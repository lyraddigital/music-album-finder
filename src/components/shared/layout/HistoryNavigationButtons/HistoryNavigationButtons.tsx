import style from './HistoryNavigationButtons.module.scss';

import BackArrowIcon from '../../icons/BackArrowIcon/BackArrowIcon';
import ForwardArrowIcon from '../../icons/ForwardArrowIcon/ForwardArrowIcon';

const HistoryNavigationButtons = (props: any) => {
    return (
        <div id={style.historyNavigationButtons}>
            <button disabled={props.backButtonDisabled}> {/* (click)="navigateBack()" */}
                <BackArrowIcon disabled={props.backButtonDisabled} />
            </button>
            <button className={style.forwardButton} disabled={props.forwardButtonDisabled}> {/* (click)="navigateForward()" */}
                <ForwardArrowIcon disabled={props.backButtonDisabled} />
            </button>
        </div>
    );
};

export default HistoryNavigationButtons;
