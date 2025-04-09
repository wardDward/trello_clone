import React, { useEffect, useRef } from 'react';

function DropDown({ id, name, openDropdownId, setOpenDropdownId, renderContent }) {
  const dropdownRef = useRef(null);
  const isOpen = openDropdownId === id;

  const toggleDropdown = () => {
    setOpenDropdownId(isOpen ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpenDropdownId]);


  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="py-1 px-2 hover:bg-slate-100 rounded-md text-sm">
        {name}
      </button>
      {isOpen && (
        <div className=" bg-white shadow-md mt-2 p-2 border border-slate-300 rounded-md absolute top-full">
          {renderContent}
        </div>
      )}
    </div>
  );
}

export default DropDown;
