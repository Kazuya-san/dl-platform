"use client";
import { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { LoadingSpinner } from "@/components/ui/spinner";

interface TournamentFormProps {
  children: ReactNode;
  onSubmit?: (data: TournamentFormData) => void;
}

export const formSchema = z.object({
  url: z.string().url("Invalid URL"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid URL"),
  tags: z.array(z.string()).nonempty("At least one tag is required"),
  prize: z.string().min(1, "Prize is required"),
  entryFee: z.string().min(1, "Entry fee is required"),
  startTime: z.string().optional(),
  startDate: z.date().optional(),
  countdown: z.string().optional(),
  teamSize: z.string().optional(),
});

export type TournamentFormData = z.infer<typeof formSchema>;

export function TournamentForm({ children }: TournamentFormProps) {
  const { toast } = useToast();
  //   const { mutate: submitForm, isPending: isLoading } = useMutation({
  //     mutationFn: () => {},
  //     onSuccess: () => {
  //       form.reset();
  //       toast({
  //         title: "Tournament Created",
  //         description: "Tournament created successfully",
  //       });
  //     },
  //   });

  const form = useForm<TournamentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      title: "",
      description: "",
      image: "",
      tags: [],
      prize: "",
      entryFee: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="Background Image URL" {...field} />
              </FormControl>
              <FormDescription>
                The URL of the background image for the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Tournament Title" {...field} />
              </FormControl>
              <FormDescription>The title of the tournament.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Tournament Description" {...field} />
              </FormControl>
              <FormDescription>
                A brief description of the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Image URL" {...field} />
              </FormControl>
              <FormDescription>
                The URL of the image associated with the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input
                  placeholder="Comma-separated tags"
                  {...field}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value.split(",").map((tag) => tag.trim())
                    )
                  }
                />
              </FormControl>
              <FormDescription>Tags describing the tournament.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="prize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prize</FormLabel>
              <FormControl>
                <Input placeholder="Prize Amount" {...field} />
              </FormControl>
              <FormDescription>The prize for the tournament.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="entryFee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entry Fee</FormLabel>
              <FormControl>
                <Input placeholder="Entry Fee" {...field} />
              </FormControl>
              <FormDescription>
                The entry fee for the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Time</FormLabel>
              <FormControl>
                <Input placeholder="Start Time" {...field} />
              </FormControl>
              <FormDescription>
                The start time of the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <DatePicker
                  onChange={field.onChange}
                  name={field.name}
                  value={field.value}
                />
              </FormControl>
              <FormDescription>
                The start date of the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="countdown"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Countdown</FormLabel>
              <FormControl>
                <Input placeholder="Countdown" {...field} />
              </FormControl>
              <FormDescription>
                The countdown to the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="teamSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Size</FormLabel>
              <FormControl>
                <Input placeholder="Team Size" {...field} />
              </FormControl>
              <FormDescription>
                The team size for the tournament.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2">
          {children}
          {false && <LoadingSpinner />}
        </div>
      </form>
    </Form>
  );
}
