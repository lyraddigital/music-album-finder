import style from './SearchForm.module.scss';

const SearchForm = (props: any) => {
    return (
        <form id={style.searchForm}> {/* [formGroup]="formGroup" */}
            <div className={style.searchField}>
                <div className={style.tabletMagnifyingGlass}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="magnifying-glass"> {/* [ngClass]="class" */}
                        <path d="M16.39,16.31l4.4,5.15-.77.66L15.62,17a8.21,8.21,0,0,1-5.12,1.73A8.29,8.29,0,0,1,7.2,18a8.29,8.29,0,0,1-4.53-4.53,8.46,8.46,0,0,1,0-6.6A8.57,8.57,0,0,1,4.48,4.17,8.46,8.46,0,0,1,7.2,2.36a8.46,8.46,0,0,1,6.6,0,8.46,8.46,0,0,1,2.72,1.81,8.57,8.57,0,0,1,1.81,2.72,8.49,8.49,0,0,1,0,6.66,8.57,8.57,0,0,1-1.92,2.76ZM10.5,17.69a7.24,7.24,0,0,0,3.76-1A7.45,7.45,0,0,0,17,14a7.5,7.5,0,0,0,0-7.52A7.45,7.45,0,0,0,14.26,3.7a7.5,7.5,0,0,0-7.52,0A7.45,7.45,0,0,0,4,6.43,7.5,7.5,0,0,0,4,14a7.45,7.45,0,0,0,2.73,2.73A7.24,7.24,0,0,0,10.5,17.69Z" transform="translate(-2 -1.69)"></path>
                    </svg>
                </div>
                <input type="text" placeholder="Search" /> { /* formControlName="searchTerm" */}
                <button className={style.tabletClearButton}> {/*  (click)="searchCleared.emit()" [class.active]="showClearButton" */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="blackStroke">
                        <path d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93" fill="none" strokeMiterlimit="10"></path> { /*  [ngClass]="isWhite ? 'whiteStroke' : 'blackStroke'" */}
                        <polygon points="6 8.13 6.84 7.28 7.55 8 6.78 8.74 6 8.13"></polygon>
                    </svg>
                </button>
            </div>
            <button className={style.mobileClearButton}> {/* (click)="searchCleared.emit()" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="whiteStroke">
                    <path d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93" fill="none" strokeMiterlimit="10"></path> { /*  [ngClass]="isWhite ? 'whiteStroke' : 'blackStroke'" */}
                    <polygon points="6 8.13 6.84 7.28 7.55 8 6.78 8.74 6 8.13"></polygon>
                </svg>
            </button>
        </form>
    );
};

export default SearchForm;
