import { useEffect, useReducer } from 'react';
import { withRouter } from 'react-router-dom';

import style from './HistoryNavigationButtons.module.scss';
import BackArrowIcon from '../../icons/BackArrowIcon/BackArrowIcon';
import ForwardArrowIcon from '../../icons/ForwardArrowIcon/ForwardArrowIcon';

const historyStepsReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'PUSH': {
            const currentCount = state.count;
            const newKeys = [...state.stepKeys, action.key];

            return { 
                ...state,
                count: (currentCount + 1),
                stepKeys: newKeys
            };
        }
        case 'POP': {
            const index = state.stepKeys.findIndex((sk: any) => sk === action.key);
            
            return {
                ...state,
                currentIndex: index
            };
        }
    }

    return state;
};

const HistoryNavigationButtons = (props: any) => {
    const { history } = props;
    const [ historySteps, dispatch ] = useReducer(historyStepsReducer, { count: 1, currentIndex: 0, stepKeys: [history.location.key] });

    console.log(historySteps);

    useEffect(() => {
        history.listen((e:any) => {
            if (history.action === 'PUSH') {
                dispatch({ type: 'PUSH', key: e.key });
            } else if (history.action === 'POP') {
                dispatch({ type: 'POP', key: history.location.key });
            }
        });
    }, [history, dispatch]);

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
