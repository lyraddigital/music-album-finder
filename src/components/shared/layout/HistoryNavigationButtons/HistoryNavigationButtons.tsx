import { withRouter } from 'react-router-dom';

import style from './HistoryNavigationButtons.module.scss';

import BackArrowIcon from '../../icons/BackArrowIcon/BackArrowIcon';
import ForwardArrowIcon from '../../icons/ForwardArrowIcon/ForwardArrowIcon';

const HistoryNavigationButtons = (props: any) => {
    const { history } = props;

    const navigateBack = () => {        
        history.goBack();
    };

    const navigateForward = () => {
        history.goForward();
    };

    return (
        <div id={style.historyNavigationButtons}>
            <button onClick={navigateBack}> {/* disabled={props.backButtonDisabled} */}
                <BackArrowIcon /> {/* disabled={props.backButtonDisabled} */}
            </button>
            <button className={style.forwardButton} onClick={navigateForward}> {/* disabled={props.forwardButtonDisabled} */}
                <ForwardArrowIcon /> {/* disabled={props.backButtonDisabled} */}
            </button>
        </div>
    );
};

export default withRouter(HistoryNavigationButtons);
