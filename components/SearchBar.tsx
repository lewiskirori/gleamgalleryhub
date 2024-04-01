"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SeacrhButton = ({ otherClasses } : { otherClasses : string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 ${otherClasses}`}
  >
    <Image 
      src="/magnifying-glass.svg"
      alt="Search-icon"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />

            <SeacrhButton 
              otherClasses="sm:hidden"
            />
        </div>
        
        <div className="searchbar__item">
          <Image
            src="/car-sport.svg"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="Auto Model"
          />
          <input 
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="X6 M"
            className="searchbar__input"
          />
        </div>
    </form>
  )
}

export default SearchBar