'use client'

import { useMenu } from '../context/MenuContext';

export default function HinnastoPage() {
    const { isOpen } = useMenu()

    const topMargin = isOpen ? '32px' : '32px';

    return (
        <>
            <div 
                className="flex flex-col items-center justify-start min-h-screen bg-gray-100 gap-8"
            >
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-gray-800 mt-8">Soitonopetus</h1>
                    <p>Pidän kotonani laulutunteja sekä soitonopetusta kitaralla</p>
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Hinnasto</h2>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold text-gray-800 gap-8">Aikuiset työssäkäyvät</h3>
                    <p>60min 50€</p>
                    <p>45min 40€</p>
                    <p>30min 30€</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold text-gray-800 gap-8">Aleryhmät</h3>
                    <p>60min 40€</p>
                    <p>45min 30€</p>
                    <p>30min 20€</p>
                </div>
            </div>
        </>
    );
}