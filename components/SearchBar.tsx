"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

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
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (manufacturer === '' && model === '') {
        toast.error('Enter car details to search.');
        return;
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model) {
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }


      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname, {scroll: false});
    }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />

            <SeacrhButton 
              otherClasses="
              sm:hidden
              border-2 
              border-transparent 
              rounded-full 
              transition 
              hover:border-blue-500
              "
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
          <SeacrhButton otherClasses="
          sm:hidden
          border-2 
          border-transparent 
          rounded-full 
          transition 
          hover:border-blue-500
          " 
          />
        </div>
        <SeacrhButton otherClasses="
        max-sm:hidden
        border-2 
        border-transparent 
        rounded-full 
        transition 
        hover:border-blue-500
        "
        />
    </form>
  )
}

export default SearchBar