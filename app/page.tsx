"use client";

import { CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ToasterProvider from "@/providers/ToasterProvider";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false)

  // Search mode
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter mode
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // Page mode
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
  
      setAllCars(result);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [manufacturer, year, fuel, model, limit])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <ToasterProvider />

      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Auto Catalog
          </h1>
          <p>Pinpoint the car(s) you dream about</p>
        </div>

        <div className="home__filters">
          <SearchBar 
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div
            className="
              home__filter-container
            "
          >
            <CustomFilter title='fuel' options={fuels} 
              setFilter={setFuel}
            />
            <CustomFilter title='year' options={yearsOfProduction} 
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image 
                  src="/loading-com.svg"
                  alt="Loading"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore 
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
                setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Hey, nothing came up
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
