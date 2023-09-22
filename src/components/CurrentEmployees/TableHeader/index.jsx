import React from "react";
import PageSizeSelector from "./PageSizeSelector";
import SearchInputField from "./SearchInputField";

function TableHeader({ onEntriesChange, onSearch }) {
  return (
    <div className="container">
      <PageSizeSelector onEntriesChange={onEntriesChange} />
      <SearchInputField onSearch={onSearch} />
    </div>
  );
}

export default TableHeader;
