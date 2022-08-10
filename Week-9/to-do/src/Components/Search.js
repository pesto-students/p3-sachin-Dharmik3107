import React from 'react'

function Search(){
    return(
        <div className="search">
            <input type="text" name='search' id='search' placeholder='search here' />
            <i class="las la-search search-icon"></i>
        </div>
    )
}

export default Search;