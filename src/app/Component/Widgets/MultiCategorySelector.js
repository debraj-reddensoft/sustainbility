import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const MultiSelectDropdown = ({ options, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle selection and deselection of categories
  const handleSelect = (option) => {
    let updatedSelection;
    if (selectedOptions.includes(option)) {
      updatedSelection = selectedOptions.filter((item) => item !== option);
    } else {
      updatedSelection = [...selectedOptions, option];
    }
    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  // Remove selected category
  const removeSelected = (option) => {
    const updatedSelection = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedSelection);
    onSelectionChange(updatedSelection);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0 flex justify-between items-center" onClick={toggleDropdown}>
        <span className="text-gray-600">
          Select Categories
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      <div className="flex gap-1 overflow-auto">
        {selectedOptions.map((option) => (
          <div key={option} className="flex items-center bg-gray-900 text-white px-2.5 pt-1 pb-1.5 rounded-full text-xs font-normal my-0.5">
            {option}
            <button onClick={() => removeSelected(option)} className="ml-2 text-gray-400 hover:text-white text-[10px] p-0 border-none relative top-0.5">
              ✕
            </button>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white border border-neutral-200 rounded-lg shadow-lg max-h-40 overflow-auto z-10 left-0 top-12 divide-y divide-neutral-200">
          {options.map((option) => (
            <label key={option} className="flex items-center px-3 py-3 hover:bg-gray-100 cursor-pointer w-full text-sm text-black font-medium">
              <input type="checkbox" checked={selectedOptions.includes(option)} onChange={() => handleSelect(option)} className="mr-2 size-4"/>
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Page() {
  
  const categories = ["Technology", "Health", "Business", "Education", "Sports", "Skydiving"];

  const handleSelectionChange = (selected) => {
    console.log("Selected Categories:", selected);
  };

  return (
      <MultiSelectDropdown options={categories} onSelectionChange={handleSelectionChange}/>
  );
}


