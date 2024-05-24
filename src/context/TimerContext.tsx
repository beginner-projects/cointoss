'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TimerContextProps {
  bettingOpen: boolean;
  timeLeft: number;
  startTimer: () => void;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [bettingOpen, setBettingOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          const newBettingOpen = !bettingOpen;
          setBettingOpen(newBettingOpen);
          return newBettingOpen ? 8 : 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [bettingOpen]);

  const startTimer = () => {
    setBettingOpen(true);
    setTimeLeft(8);
  };

  return (
    <TimerContext.Provider value={{ bettingOpen, timeLeft, startTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

