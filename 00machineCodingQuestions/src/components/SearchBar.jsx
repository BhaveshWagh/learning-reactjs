import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return <SearchBar items={items} />;
};

export default App;