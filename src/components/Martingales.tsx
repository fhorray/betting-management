import React from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useBankContext } from '@/context/BankContext';
import BetRow from './BetRow';

interface MartingalesProps {
  bank: number;
  bet: number;
  goal: number;
  betNumber: number[];
}

const Martingales: React.FC<MartingalesProps> = () => {
  const {
    bank,
    setBank,
    bet,
    setBet,
    goal,
    setGoal,
    betNumber,
    setBetNumber,
    setCountNumber,
    countNumber,
  } = useBankContext();

  return (
    <Table>
      <TableCaption>A list amount of bets you'll do if you lose.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Gale</TableHead>
          <TableHead>Bank Value</TableHead>
          <TableHead>Bet Value</TableHead>
          <TableHead>Goal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {betNumber.map((item, index) => (
        <TableRow key={index}>
        <TableCell className="font-medium">
          {index === 0 ? 'Initial' : index}
        </TableCell>
        <TableCell>{(bank - (betNumber[index - 1] || 0) * 2).toFixed(2)}</TableCell>
        <TableCell>{((betNumber[index - 1] || 0) * 2).toFixed(2)}</TableCell>
        <TableCell>{goal.toFixed(2)}</TableCell>
      </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Martingales;
