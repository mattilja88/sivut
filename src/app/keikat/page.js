'use client'

import { useMenu } from '../context/MenuContext';

export default function HinnastoPage() {
    const { isOpen } = useMenu()

    const topMargin = isOpen ? '32px' : '32px';

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <div className="w-[80vw] flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Esiintyjäksi</h1>
            <p>Tilaa minut keikalle. Ota rohkesti yhteyttä. </p>
        </div>
        <div className="w-[80vw] flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Mies ja kitara</h2>
            <p>Esiinnyt mies ja kitara periaatteella esittäen lauluja aina suomalaisista klassikoista moderneihin hitteihin</p>
        </div>
        <div className="w-[80vw] flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Kuulutukset</h2>
            <p>Olen muun muassa toiminut pesäpallo-otteluiden kuuluttajana ja DJ:nä</p>
        </div>
        <div className="w-[80vw] flex flex-col items-center justify-start">
            <h2 className="text-2xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Hinnat</h2>
            <p>Kysy rohkeasti tarjousta</p>
        </div>
      </div>
    );
  }