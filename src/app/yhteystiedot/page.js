'use client'

import { useMenu } from '../context/MenuContext';

export default function ContactsPage() {
    const { isOpen } = useMenu()

    const topMargin = isOpen ? '32px' : '32px';

    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mt-8" style={{ marginTop: topMargin }}>Yhteystiedot</h1>
        <div>
            <p>040-12345567</p>
            <p>sposti@mail.fi</p>
            <p>tähäninstatili</p>
        </div>
      </div>
    );
  }