import React from 'react';
import { Clock } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"

const StoppedClock: React.FC = () => {
  const { toast } = useToast()

  const handleClick = () => {
    const messages = [
      "Tempo é uma ilusão",
      "Por que se preocupar com o tempo?",
      "O tempo está parado, mas você não",
      "Viva o eterno agora!",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    toast({
      title: "Relógio Parado",
      description: randomMessage,
    })
  };

  return (
    <div 
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <Clock size={100} className="text-gray-600" />
      <p className="text-2xl font-bold mt-2">12:00</p>
    </div>
  );
};

export default StoppedClock;