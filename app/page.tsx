import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import ToasterProvider from "@/providers/ToasterProvider";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const getRandomYearInRange = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2018 }, (_, index) => 2019 + index);
    const randomIndex = Math.floor(Math.random() * years.length);
    return years[randomIndex];
  };

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || getRandomYearInRange(),
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

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
          <SearchBar />

          <div
            className="
              home__filter-container
            "
          >
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}

            </div>
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
