import React, {useState} from "react"

const Search = ({searchArtist}) => {
    const [search, setSearch] = useState('');

    const handleChange = event => {
        setSearch(event.target.value);
    }

    const handleKeyEnter = event => {
        if (event.code === "Enter") {
            search && searchArtist(search);
        }
    }

    const handleClick = () => {
        search && searchArtist(search);
    }

    return(
        <div>
            <input type="text" onKeyUp={handleKeyEnter} onChange={handleChange} value={search}/>
            <button type="button" onClick={handleClick}>Search</button>
        </div>
    );
}

export default Search;