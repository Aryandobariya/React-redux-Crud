import React, { useState } from 'react';

function SearchFilter() {
  // Step 1: Declare React states for search input values.
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Another Item 1',
    'Another Item 2',
    'Yet Another Item'
  ]);

  // Step 2: Create onChange function to update search term state.
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Step 3: Use Array.filter() to filter the list of items based on the search term.
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Filter Example</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
