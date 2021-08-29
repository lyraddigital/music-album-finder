import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import style from './HistoryNavigationButtons.module.scss';

import BackArrowIcon from '../../icons/BackArrowIcon/BackArrowIcon';
import ForwardArrowIcon from '../../icons/ForwardArrowIcon/ForwardArrowIcon';

const HistoryNavigationButtons = (props: any) => {
    const { history } = props;
    const [ historySteps, setHistorySteps ] = useState<number>(0);
    const [ currentStep, setCurrentStep ] = useState<number>(0);
    const [ stepKeys, setStepKeys ] = useState<Array<string>>([history.location.key]);
    
    useEffect(() => {
        history.listen((e:any) => {
            if (history.action === 'PUSH') {
                console.log(e);
                setHistorySteps((prevSteps: number) => prevSteps + 1);
                setCurrentStep((prevStep: number) => prevStep + 1);
                setStepKeys((prevStepKeys: Array<string>) => {
                    const newStepKeys = [ ...prevStepKeys ];
                    newStepKeys.push(e.key);

                    return newStepKeys;
                })
            } else if (history.action === 'POP') {
                console.log(history.location.key);
            }
        });
    }, [history, setHistorySteps, setCurrentStep, setStepKeys]);

    const navigateBack = () => {    
        history.goBack();
    };

    const navigateForward = () => {
        history.goForward();
    };

    console.log(historySteps);
    console.log(currentStep);

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
