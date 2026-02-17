import React from 'react';

function FilterPanel({ filter, stats, onFilterChange }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-panel">
      <p className="filter-label">Filter by:</p>
      <div className="filter-buttons">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => onFilterChange(f)}
            className={`filter-button ${filter === f ? 'active' : ''}`}
          >
            {f} ({f === 'All' ? stats.total : f === 'Active' ? stats.remaining : stats.completed})
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterPanel;
