import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-white shadow-sm px-3 rounded-md">
      <div>
        <h1>All Laptops</h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <h1>Show:</h1>
          <select>
            <option>20</option>
            <option>24</option>
            <option>48</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <h1>Sort By:</h1>
          <select>
            <option>Default</option>
            <option>Price (Low &gt; High)</option>
            <option>Price (High &gt; Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
