"use client";

import "./SearchManufacturer.css";
import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment, useState } from 'react'

const SearchManufacturer = ({ manufacturer, setManufacturer }
  : SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = query === "" ? manufacturers : manufacturers.filter((
    item
  ) => (
    item.toLowerCase().replace(/\s+/g, "").includes(
      query.toLowerCase().replace(/\s+/g, "")
    )
  ))
      
  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
              <Combobox.Button className="
                absolute
                top-[14px]
              ">
                <Image 
                  src="/auto-logo.svg"
                  width={20}
                  height={20}
                  className="ml-4"
                  alt="Auto-Logo"
                />
              </Combobox.Button>

              <Combobox.Input 
                className="search-manufacturer__input"
                placeholder="BMW"
                displayValue={(manufacturer: string) =>
                manufacturer}
                onChange={(e) => setQuery(e.target.value)}
              />

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options>
                  {filteredManufacturers.length === 0 && query != ""
                    ? (
                      <Combobox.Option
                        value={query}
                        className="search-manufacturer__option"
                      >
                        Couldn't find “{query}”
                      </Combobox.Option>
                    ) : (
                      filteredManufacturers.map((item) => (
                        <Combobox.Option
                          key={item}
                          className="relative search-manufacturer__option"
                          value={item}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {item}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? 'text-white' : 'text-teal-600'
                                  }`}
                                >
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )
                  }
                </Combobox.Options>
              </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer