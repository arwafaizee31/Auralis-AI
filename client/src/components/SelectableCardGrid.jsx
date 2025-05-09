import React, { useState, useEffect } from "react";
import "../styles/SelectableCardGrid.css";

const SelectableCardGrid = ({ apiEndpoint, type, onSelectionChange }) => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5000${apiEndpoint}`);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching", type, error);
      }
    };
    fetchData();
  }, [apiEndpoint, type]);

  const toggleSelect = (name) => {
    const updated = selected.includes(name)
      ? selected.filter((g) => g !== name)
      : [...selected, name];

    setSelected(updated);
    onSelectionChange(updated);
  };

  const formatImagePath = (name) => {

    let formattedName = name
    .toLowerCase()
    .replace(/'/g, "")        // removes apostrophes
    .replace(/\s+/g, "-");  
  
   
  
    return `/images/${type}/${formattedName}.jpg`;
  };

  // Show only 2 rows initially
  const visibleItems = expanded
    ? items
    : isMobile
    ? items.slice(0, 2) // 2 items max for mobile
    : items.slice(0, 16); // assume ~3 cards per row on desktop, 2 rows

  return (
    <div>
      <div className="grid">
        {visibleItems.map(({ name }) => (
          <div
            key={name}
            className={`card ${selected.includes(name) ? "selected" : ""}`}
            style={{ backgroundImage: `url(${formatImagePath(name)})` }}
            onClick={() => toggleSelect(name)}
          >
            <div className="label">
              {name}
              {selected.includes(name) && <span className="tick">✔</span>}
            </div>
          </div>
        ))}
      </div>
      {items.length > (isMobile ? 2 : 6) && (
        <div className="toggle-wrapper">
          <button   type="button"  onClick={() => setExpanded(!expanded)} className="toggle-btn">
            {expanded ? "▲ Show Less" : "▼ Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectableCardGrid;
