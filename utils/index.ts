import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3',
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}

export const calculateCarLeasing = (city_mpg: number, year: number) => {

    // Leasing price per day in Ksh
    const basePricePerDay = 6700;

    // Rate per mile driven
    const mileageFactor = 0.1;

    // Rate per year of the vehicle age
    const ageFactor = 0.05; 

    // Rate based on age and mileage
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Total Leasing rate per day
    const leasingRatePerDay = basePricePerDay + mileageRate + ageRate;

    return leasingRatePerDay.toFixed(0);
}


export const generateCarImageUrl = (car: CarProps, angle ? : string) => {
    const url = new URL ('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ') [0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}