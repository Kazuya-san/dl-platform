'use client';
import { ReactNode, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { FileUploader } from '@/components/file-uploader';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { teams } from '@/content';

interface JoinTournamentFormProps {
  children: ReactNode;
  setTab: () => void;
  onSubmit?: (data: JoinTournamentFormData) => void;
}

export const formSchema = z.object({
  banner: z
    .array(z.custom<File>())
    .min(1, 'Banner Image is required')
    .nonempty('Banner is required'),
  team: z.string().min(1, 'Team is required'),
  gamertag: z.string().min(1, 'Gamer tag is required'),
});

export type JoinTournamentFormData = z.infer<typeof formSchema>;

export function JoinTournamentForm({
  children,
  setTab,
}: JoinTournamentFormProps) {
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<JoinTournamentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      banner: [],
      team: '',
      gamertag: 'DestructionMikey',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, 'valu');
    setisLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
    setisLoading(false);
    document.getElementById('modalClose')?.click();
    setTab();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banner</FormLabel>
              <FormControl>
                <FileUploader onChange={field.onChange} files={field.value} />
              </FormControl>
              <FormDescription>The banner image for yourself.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gamertag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gamer Tag</FormLabel>
              <FormControl>
                <Input placeholder="Gamer Tag" disabled {...field} />
              </FormControl>
              <FormDescription>
                This is your Gamer Tag. we loaded it from your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="team"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    id="region"
                    className="w-full border-muted-foreground px-3 py-2 min-h-[40px] focus:ring-primary focus:border-primary"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-[#272626] border-none rounded-none">
                    {teams.map((team) => (
                      <SelectItem
                        key={team}
                        value={team}
                        className="cursor-pointer h-[46px]"
                      >
                        {team}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>Select your team.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end gap-2">
          {isLoading && <LoadingSpinner />}
          {children}
        </div>
      </form>
    </Form>
  );
}
