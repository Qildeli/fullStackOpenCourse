import React from 'react';

const SearchFilter = ({ searchTerm, onChange }) => {
    return (
        <div>
            Search with name
            <input
                value={searchTerm}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchFilter;