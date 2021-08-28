import { createContext } from "react";

import Search from "./Search";

const SearchContext = createContext<Search>(new Search());

export default SearchContext;