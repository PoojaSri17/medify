// src/components/Search.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      const response = await axios.get('https://meddata-backend.onrender.com/states');
      setStates(response.data);
    };
    fetchStates();
  }, []);

  const handleStateChange = async (e) => {
    setSelectedState(e.target.value);
    const response = await axios.get(`https://meddata-backend.onrender.com/cities/${e.target.value}`);
    setCities(response.data);
  };

  const handleSearch = () => {
    navigate('/search-results', { state: { state: selectedState, city: selectedCity } });
  };

  return (
    <div className="search-container">
      <h2>Find a Medical Center</h2>
      <select value={selectedState} onChange={handleStateChange}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>

      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
