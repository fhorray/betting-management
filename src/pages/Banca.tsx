import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import BankForm from '@/components/BankForm';
import ContentCard from '@/components/ContentCard';
import Martingales from '@/components/Martingales';
import { useBankContext } from '@/context/BankContext';

const Banca = () => {
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
    <section className="p-5 gap-5 flex flex-col">
      <Dialog>
        <DialogTrigger>
          <Button>Change</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Bank</DialogTitle>
            <DialogDescription>
              <BankForm setGoal={setGoal} setBank={setBank} setBet={setBet} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="flex gap-2">
        <ContentCard title="Bank" bank={bank} />
        <ContentCard title="Bet" bet={bet} />
        <ContentCard title="Goal" goal={goal} />
      </div>

      {/* TABELA */}
      <Martingales bank={bank} bet={bet} goal={goal} betNumber={betNumber} />
    </section>
  );
};

export default Banca;
