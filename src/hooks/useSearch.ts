import { useContext } from "react";

import SearchContext from "../core/SearchContext";

const useSearch = () => {
    return useContext(SearchContext);
};

export default useSearch;