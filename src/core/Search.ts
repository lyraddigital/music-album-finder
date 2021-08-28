class Search {
    constructor(
        private history?: any,
        private searchValue?: string,
        private setSearchValue?: (searchValue: string) => void
    ) { }

    public performSearch(searchValue: string) {
        console.log(this.history);
        this.history?.pushState(undefined, '', `/search/results/${searchValue}`);

        if (this.setSearchValue) {
            this.setSearchValue(searchValue);
        }
    };

    public clearSearchTerm() {
        if (this.setSearchValue) {
            this.setSearchValue('');
        }
    }

    public get searchTerm(): string {
        return this.searchValue || '';
    }
};

export default Search;