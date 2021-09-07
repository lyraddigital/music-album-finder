import { atom, selector } from "recoil";
import { albums } from "../data/albums";

import { SearchResultItem } from "../models";

export interface SearchItemsState {
    searchItems: Array<SearchResultItem>;
}

export const searchTermState = atom<string>({
    key: 'searchTermState',
    default: ''
});

export const searchItemsBySearchTerm = selector<SearchItemsState>({
    key: 'searchItemsBySearchTerm',
    get: async ({ get }) => {
        const searchTerm = get(searchTermState);

        const result = await new Promise<SearchItemsState>((resolve) => {
            setTimeout(() => {
                resolve({ searchItems: albums });
            }, 500);
        });

        return { searchItems: result.searchItems.filter(si => si.title.indexOf(searchTerm) > 0) };
    }
});