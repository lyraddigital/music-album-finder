import { useState } from "react";
import { useHistory } from "react-router-dom";

import Search from "../../core/Search";
import SearchContext from '../../core/SearchContext';

const withSearch = (ComposedComponent: any) => {
    return (props: any) => {
        const history = useHistory();
        const [searchTerm, setSearchTerm] = useState<string>('');
        const search = new Search(history, searchTerm, setSearchTerm);
        
        return (
            <SearchContext.Provider value={search}>
                <ComposedComponent {...props} />
            </SearchContext.Provider>
        );
    }
};

export default withSearch;