"use client";

import Image from 'next/image';
import { CarProps } from '@/types';
import { calculateCarLeasing } from '@/utils';
import React from 'react'

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car } : CarCardProps) => {
    const {
        city_mpg,
        year,
        make,
        model,
        transmission,
        drive
    } = car;

    const autoLeasing = calculateCarLeasing(city_mpg, year).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    <span className="font-semibold">{make}<span className="text-sm ml-2"> · {model}</span></span>
                </h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    Ksh
                </span>
                    {autoLeasing}
                <span className="self-end text-[14px] font-medium">
                    / day
                </span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image src="/hero.png" 
                alt='Vehicle-Model'
                fill
                priority
                className="object-contain"
                />
            </div>
        </div>
    )
}

export default CarCard