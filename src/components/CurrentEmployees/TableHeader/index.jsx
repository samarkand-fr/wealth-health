import React from "react";
import PageSizeSelector from "./PageSizeSelector";
import SearchInputField from "./SearchInputField";

/**
 * TableHeader component for displaying page size selector and search input field.
 *
 * @param {object} props - The component's properties.
 * @param {function} props.onEntriesChange - The function to handle page size change.
 * @param {function} props.onSearch - The function to handle search input.
 * @returns {JSX.Element} The TableHeader component.
 */
function TableHeader({ onEntriesChange, onSearch }) {
  return (
    <div className="container">
      <PageSizeSelector onEntriesChange={onEntriesChange} />
      <SearchInputField onSearch={onSearch} />
    </div>
  );
}

export default TableHeader;
