import React, { useState } from "react";
import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { Images } from "lucide-react";
const CountryCodeSelector = ({ onSelect = () => {} }) => {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const countryList = getCountries().map((code) => ({
    code,
    name: `${code} (+${getCountryCallingCode(code)})`,
    flag: `https://flagcdn.com/w40/${code.toLowerCase()}.png`,
  }));

  // Filter countries based on search input
  const filteredCountries = countryList.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input type="text" placeholder="Search country code..." value={search} onChange={(e) => setSearch(e.target.value)} onFocus={() => setShowDropdown(true)} className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0"/>
      {showDropdown && (
        <ul className="absolute w-full bg-white shadow-md border border-neutral-200 rounded max-h-60 overflow-auto z-10">
          {filteredCountries.map((country) => (
            <li key={country.code} onClick={() => {onSelect(country.name); setSearch(country.name); setShowDropdown(false);}} className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
              <Images src={country.flag} alt={country.code} className="w-6 h-4 mr-2"/>
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryCodeSelector;
