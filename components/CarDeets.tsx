"use client";

import { CarProps } from '@/types';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import React, { Fragment } from 'react'

interface CarDeetsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDeets = ({ isOpen, closeModal, car } : CarDeetsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25">
            </div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="
                  relative
                  w-full
                  max-w-lg
                  max-h-[90vh]
                  overflow-y-auto
                  transform
                  rounded-2xl
                  bg-white
                  p-6
                  text-left
                  shadow-xl
                  transition-all
                  flex
                  flex-col
                  gap-5
                ">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 border-2 border-transparent rounded-full transition hover:bg-primary-blue-200 hover:border-blue-500"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="Close-Btn"
                      width={20}
                      height={20}
                      objectFit="Contain"                    
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image src="/hero.png" 
                        alt="Vehicle-Model"
                        layout="fill"
                        objectFit="contain"
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" 
                          alt="Vehicle-Model"
                          layout="fill"
                          objectFit="contain"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" 
                          alt="Vehicle-Model"
                          layout="fill"
                          objectFit="contain"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image src="/hero.png" 
                          alt="Vehicle-Model"
                          layout="fill"
                          objectFit="contain"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-2xl capitalize p-2 rounded-lg bg-gray-200">
                      <span className="text-sm ml-2">{car.make}<span className="text-xl font-semibold"> {car.model}</span></span>
                    </h2>

                    <div className="mt-3 grid grid-cols-2 gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div className="flex justify-between" key={key}>
                          <h4 className="text-sm font-semibold text-gray-600 p-1 rounded-md bg-gray-100 capitalize">
                            {key.split("_").join(' ')}
                          </h4>
                          <p className="text-black font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDeets