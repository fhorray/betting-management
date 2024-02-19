import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definindo o tipo para os valores de contexto
interface ContextValues {
  bank: number;
  setBank: React.Dispatch<React.SetStateAction<number>>;
  bet: number;
  setBet: React.Dispatch<React.SetStateAction<number>>;
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
  betNumber: number[];
  setBetNumber: React.Dispatch<React.SetStateAction<number[]>>;
  countNumber: React.Dispatch<React.SetStateAction<number[]>>;
  setCountNumber: React.Dispatch<React.SetStateAction<number[]>>;
}

// Criando o contexto
const BankContext = createContext<ContextValues | undefined>(undefined);

// Provedor do contexto que envolve toda a sua aplicação
const BankContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bank, setBank] = useState<number>(() => {
    const storedBank = localStorage.getItem('bank');
    return storedBank ? parseInt(storedBank, 10) : 0;
  });

  const [bet, setBet] = useState<number>(() => {
    const tsoredBet = localStorage.getItem('bet');
    return tsoredBet ? parseInt(tsoredBet, 10) : 0;
  });

  React.useEffect(() => {
    localStorage.setItem('bank', bank.toString());
  }, [bank]);

  React.useEffect(() => {
    localStorage.setItem('bet', bet.toString());
  }, [bet]);

  const [goal, setGoal] = useState<number>(0);
  const [betNumber, setBetNumber] = useState<number[]>([]);
  const [countNumber, setCountNumber] = useState<number>();

  const contextValues: ContextValues = {
    bank,
    setBank,
    bet,
    setBet,
    goal,
    setGoal,
    betNumber,
    setBetNumber,
    countNumber,
    setCountNumber,
  };

  return (
    <BankContext.Provider value={contextValues}>
      {children}
    </BankContext.Provider>
  );
};

// Hook customizado para acessar o contexto
const useBankContext = (): ContextValues => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error('useBankContext must be used within a BankContextProvider');
  }
  return context;
};

export { BankContextProvider, useBankContext };
