'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DialogClose } from './ui/dialog';

// FORM SCHEMA
const formSchema = z.object({
  bank: z.number(),
  bet: z.number(),
  goal: z.number(),
});

// INTERFACES
interface ContentFormProps {
  setGoal: React.Dispatch<React.SetStateAction<number>>;
  setBet: React.Dispatch<React.SetStateAction<number>>;
  setBank: React.Dispatch<React.SetStateAction<number>>;
}

const BankForm: React.FC<ContentFormProps> = ({ setGoal, setBet, setBank }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bank: 0,
      bet: 0,
      goal: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setBank(values.bank);
    setBet(values.bet);
    setGoal(values.goal);
    console.log(values);
    DialogClose;
  };

  return (
    <div className="p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="bank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="300.00"
                    {...field}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? '' : value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bt Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="300.00"
                    {...field}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? '' : value);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="goal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Goal</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="300.00"
                    {...field}
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? '' : value);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <DialogClose>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default BankForm;
