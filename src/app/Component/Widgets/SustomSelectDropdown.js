import React from 'react'
import { useState } from "react";
function SustomSelectDropdown() {
    const [selectedOption, setSelectedOption] = useState("Last 7 Days");
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        "Past 7 Days",
        "Past 14 Days",
        "Past 30 Days",
        "Past 90 Days",
    ];
    
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative">
            {/* Selected Option Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center px-4 py-2 text-black text-sm font-normal cursor-pointer w-40 shrink-0">
                {selectedOption}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" viewBox="0 0 16 7" className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    <path fill="currentColor" d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" />
                </svg>
            </button>

            {/* Dropdown Options */}
            {isOpen && (
                <ul className="absolute w-full z-10 bg-white shadow-md rounded-md mt-1 py-2.5">
                    {options.map((option) => (
                        <li key={option} className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-black" onClick={() => handleSelect(option)}>
                            {option}
                            {selectedOption === option && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                                </svg>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SustomSelectDropdown