import MagnifyingIcon from '../../icons/MagnifyingIcon/MagnifyingIcon';
import XIcon from '../../icons/XIcon/XIcon';
import style from './SearchForm.module.scss';

const SearchForm = () => {
    return (
        <form id={style.searchForm}> {/* [formGroup]="formGroup" */}
            <div className={style.searchField}>
                <div className={style.tabletMagnifyingGlass}>
                    <MagnifyingIcon />
                </div>
                <input type="text" placeholder="Search" /> { /* formControlName="searchTerm" */}
                <button className={style.tabletClearButton}> {/*  (click)="searchCleared.emit()" [class.active]="showClearButton" */}
                    <XIcon />
                </button>
            </div>
            <button className={style.mobileClearButton}> {/* (click)="searchCleared.emit()" */}
                <XIcon isWhite={true} />
            </button>
        </form>
    );
};

export default SearchForm;
