import React from 'react';
import { TableCell, TableRow } from './ui/table';

interface BetRowProps {
  index: number;
  bank: number;
  bet: number;
  goal: number;
}

const BetRow: React.FC<BetRowProps> = ({ index, bank, bet, goal }) => {
  // Calcular bank e bet com base no index
  const bankValue = index === 0 ? bank : index * bank;
  const betValue = index === 0 ? bet : index * bet;

  return (
    <TableRow key={index}>
      <TableCell className="font-medium">
        {index === 0 ? 'Initial' : index}
      </TableCell>
      <TableCell>{bankValue.toFixed(2)}</TableCell>
      <TableCell>{betValue.toFixed(2)}</TableCell>
      <TableCell>{goal.toFixed(2)}</TableCell>
    </TableRow>
  );
};

export default BetRow;
