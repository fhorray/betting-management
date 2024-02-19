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
          <TableHead>Gle</TableHead>
          <TableHead>Bank Value</TableHead>
          <TableHead>Bt Value</TableHead>
          <TableHead>Goal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {betNumber.map((item, index) => (
          <BetRow index={index} bet={bet} bank={bank} goal={goal} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Martingales;
