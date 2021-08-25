import style from './HistoryNavigationButtons.module.scss';

const HistoryNavigationButtons = () => {
    return (
        <div id={style.historyNavigationButtons}>
            <button> {/* [disabled]="backButtonDisabled" (click)="navigateBack()" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="arrow-icon"> {/*  [class.disabled]="disabled" */}
                    <path d="M4.31,11.23l10.4-8.92.69.76L5.81,11.23l9.55,8.16-.65.76" />
                </svg>
            </button>
            <button className={style.forwardButton}> {/* [disabled]="forwardButtonDisabled" (click)="navigateForward()" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" className="arrow-icon"> {/*  [class.disabled]="disabled" */}
                    <path d="M8,21.15l-.65-.76,9.55-8.16L7.31,4.07,8,3.31,18.4,12.23"></path>
                </svg>
            </button>
        </div>
    );
};

export default HistoryNavigationButtons;
