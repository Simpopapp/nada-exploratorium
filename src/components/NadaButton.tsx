import React from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Laugh } from 'lucide-react';

const NadaButton: React.FC = () => {
  const { toast } = useToast()

  const handleClick = () => {
    const sounds = ['Plop!', 'Ping!', 'Haha!', 'Boing!', 'Zing!'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    
    toast({
      title: randomSound,
      description: "Parabéns! Você não fez nada.",
    })
  };

  return (
    <Button 
      onClick={handleClick}
      className="w-40 h-40 rounded-full text-4xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
    >
      <Laugh size={64} />
    </Button>
  );
};

export default NadaButton;