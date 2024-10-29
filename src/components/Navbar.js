// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Handle search logic (for example, redirect to search results page)
        console.log('Search term:', searchTerm);
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search-results">Search Results</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/my-bookings">My Bookings</Link></li>
            </ul>
            <form onSubmit={handleSearch} style={{ display: 'inline' }}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
