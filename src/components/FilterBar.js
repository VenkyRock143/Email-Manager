import React from "react";

const FilterBar = ({ setFilter, filter }) => {
  return (
    <div className="filter-bar">
      <button 
        className={filter === "unread" ? "active" : ""} 
        onClick={() => setFilter("unread")}>
        Unread
      </button>
      <button 
        className={filter === "read" ? "active" : ""} 
        onClick={() => setFilter("read")}>
        Read
      </button>
      <button 
        className={filter === "favorites" ? "active" : ""} 
        onClick={() => setFilter("favorites")}>
        Favorites
      </button>
      <button onClick={() => setFilter("all")}>Clear</button>
    </div>
  );
};

export default FilterBar;
