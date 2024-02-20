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
  countNumber: React.Dispatch<React.SetStateAction<number>>;
  setCountNumber: React.Dispatch<React.SetStateAction<number>>;
}

// Criando o contexto
const BankContext = createContext<ContextValues | undefined>(undefined);

// Provedor do contexto que envolve toda a aplicação
const BankContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bank, setBank] = useState<number>(0);
  const [bet, setBet] = useState<number>(0);

  const [goal, setGoal] = useState<number>(0);
  const [betNumber, setBetNumber] = useState<number[]>([]);
  const [countNumber, setCountNumber] = useState<number>(0);


  // Write Line function
  React.useEffect(() => {
    if (bank > 0 && bank >= bet && typeof countNumber === 'number') {
      setBank((prevNumber) => prevNumber - bet);
      setBet((prevBet) => prevBet * 2);
      setBetNumber((prevBetNumber) => [...prevBetNumber, countNumber]);
      setCountNumber((prevNumber) => prevNumber + 1);

      console.log(
        `${betNumber} - Banca atual: ${bank.toFixed(2)}, Bet: ${bet.toFixed(2)}`
      );
    }
  }, [bank, bet, countNumber, setBetNumber]);

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
