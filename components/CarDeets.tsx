import { CarProps } from '@/types';
import React from 'react'

interface CarDeetsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDeets = ({ isOpen, closeModal, car } : CarDeetsProps) => {
  return (
    <div>CarDeets</div>
  )
}

export default CarDeets