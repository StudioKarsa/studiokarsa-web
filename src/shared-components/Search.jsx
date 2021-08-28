import * as React from 'react'
import SearchSVG from '../assets/icons/search.svg'

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form
        action="/"
        method="GET"
        autoComplete="off"

        className="flex flex-row bg-gray-200
            justify-center items-center
            px-4 my-4 rounded-full
            text-lg md:text-xl
            w-5/6 lg:w-2/5">
    <SearchSVG className="bg-gray-200"/>
    <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="bg-gray-200 border-opacity-0
            outline-none py-3 px-2
            w-full"
        placeholder="Search..."
        name="s"
    />
    </form>
);

export default SearchBar;