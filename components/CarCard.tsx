"use client";

import Image from 'next/image';
import { CarProps } from '@/types';
import { calculateCarLeasing } from '@/utils';
import React, { useState } from 'react'
import { CarDeets, CustomButton } from '.';

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

    const [isOpen, setIsOpen] = useState(false);

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

            <div className="relative w-full h-48 my-3 object-contain">
                <Image src="/hero.png" 
                alt="Vehicle-Model"
                layout="fill"
                objectFit="contain"
                className="object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex justify-start items-center gap-3 text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/car-transmission.svg" 
                            width={20}
                            height={20}
                            alt="Transmission"
                        />
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Auto' : 'Manual'}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/car-wheel-drive.svg" 
                            width={20}
                            height={20}
                            alt="Wheel-Drive"
                        />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/fuel-tank.svg" 
                            width={25}
                            height={25}
                            alt="Gas-Tank"
                        />
                        <p className="text-[14px]">
                            {city_mpg} MpG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton 
                        title='Quick View'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDeets 
                isOpen={isOpen}
                closeModal={() =>
                    setIsOpen(false)
                }
                car={car}
            />
        </div>
    )
}

export default CarCard