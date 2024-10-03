import { z } from 'zod';

export const gamertagRegex = /^[A-Za-z][A-Za-z0-9]*(?: [A-Za-z0-9]+)*$/;

export const ReservationformSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email address.',
    }),

    firstName: z.string().min(3, {
      message: 'First name must be at least 3 characters.',
    }),

    lastName: z.string().min(3, {
      message: 'Last name must be at least 3 characters.',
    }),

    region: z.string().min(3, {
      message: 'Region is required.',
    }),

    gamertag: z
      .string()
      .min(3, {
        message: 'Gamer tag must be at least 3 characters.',
      })
      .max(15, {
        message: 'Gamer tag can not be more than 15 characters.',
      })
      .regex(gamertagRegex, {
        message:
          'Gamer tag must start with a letter, cannot start with numbers, cannot have consecutive spaces, and cannot contain special characters.',
      }),

    birthMonth: z.string().refine(
      (val) => {
        const month = parseInt(val, 10);
        return month >= 1 && month <= 12;
      },
      { message: 'Invalid month' },
    ),

    birthDay: z.string().refine(
      (val) => {
        const day = parseInt(val, 10);
        return day >= 1 && day <= 31;
      },
      { message: 'Invalid day' },
    ),

    birthYear: z.string().refine(
      (val) => {
        const year = parseInt(val, 10);
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear;
      },
      { message: 'Invalid year' },
    ),
  })
  .refine(
    (data) => {
      const { birthYear, birthMonth, birthDay } = data;
      const birthDate = new Date(
        parseInt(birthYear),
        parseInt(birthMonth) - 1,
        parseInt(birthDay),
      );
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age >= 14;
    },
    {
      message: 'You must be at least 14 years old to register.',
      path: ['birthYear'], // This will make the error appear on the year field
    },
  );

export type ReservationFormData = z.infer<typeof ReservationformSchema>;
