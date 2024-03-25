export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '1cef68876cmsh49b1109680f8a99p1a7ecajsnb90780c8cd79',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        {
            headers: headers,
        }
    );

    const result = await response.json();

    return result;
}

export const calculateCarLeasing = (city_mpg: number, year: number) => {
    // Leasing price per day in Ksh
    const basePricePerDay = 6599;
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