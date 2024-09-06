import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { usePPPoEQuery } from '@/services/queries/pppoe.query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function SettingsForm() {
  const [PPPoEList, setPPPoEList] = useState();
  const form = useForm({
    defaultValues: {
      url: 'http://27.71.166.75',
      amount: 1,
      start_port: 10001,
    },
  });

  const data = usePPPoEQuery(PPPoEList!);
  console.log({ data });

  const onSubmit = (data: any) => {
    setPPPoEList(data);
  };

  return (
    <Card className=" w-full mx-auto bg-white rounded-lg shadow-xl overflow-hidden sm:max-w-6xl ring-1 ring-slate-900/5">
      <CardHeader>
        <CardTitle>Management PPPoE</CardTitle>
        <CardDescription>Load your PPPoE in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="url">URL</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Host proxy/socks5" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-start  gap-2">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Amount of PPPoE</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="amount"
                          placeholder="Number of PPPoE"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="start_port"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Port</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="start_port"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex items-end">
                  <Button type="submit">Load</Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
