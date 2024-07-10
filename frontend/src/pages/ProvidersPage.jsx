import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProvidersPage = () => {
  const [providers, setProviders] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const { data } = await axios.get('/api/providers');
        setProviders(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching providers', error);
      }
    };
    fetchProviders();
  }, []);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`/api/providers/search?query=${query}`);
      setProviders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error searching providers', error);
    }
  };

  return (
    <div>
      <h2>Providers</h2>
      <input
        type="text"
        placeholder="Search providers"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {providers.map((provider) => (
          <li key={provider._id}>{provider.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProvidersPage;
