import React from 'react';
import { Cat } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"

const InvisibleCat: React.FC = () => {
  const { toast } = useToast()

  const handlePet = () => {
    const sounds = ['Miau!', 'Purr...', 'Meow!', 'Ronron...'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    
    toast({
      title: randomSound,
      description: "Você acariciou o gato invisível!",
    })
  };

  return (
    <div 
      className="flex flex-col items-center justify-center h-60 w-60 bg-gray-100 rounded-lg cursor-pointer"
      onClick={handlePet}
    >
      <Cat size={64} className="text-gray-300 mb-4" />
      <p className="text-center text-gray-600">Há um gato invisível aqui. Toque para acariciar.</p>
    </div>
  );
};

export default InvisibleCat;