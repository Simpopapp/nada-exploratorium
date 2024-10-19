import React from 'react';
import NadaButton from '../components/NadaButton';
import StoppedClock from '../components/StoppedClock';
import InvisibleCat from '../components/InvisibleCat';
import { Toaster } from "@/components/ui/toaster"

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Nada Master</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <NadaButton />
          <p className="mt-4 text-gray-600">Botão que só faz som engraçado</p>
        </div>
        <div className="flex flex-col items-center">
          <StoppedClock />
          <p className="mt-4 text-gray-600">Relógio parado</p>
        </div>
        <div className="flex flex-col items-center">
          <InvisibleCat />
          <p className="mt-4 text-gray-600">Gato Invisível</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Index;