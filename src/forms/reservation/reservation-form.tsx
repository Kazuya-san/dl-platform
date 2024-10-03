'use client';

import { useState, useCallback, useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import {
  gamertagRegex,
  ReservationformSchema,
  ReservationFormData,
} from './reservation-form.schema';
import { debounce } from '@/lib/utils';
import { Claims } from '@auth0/nextjs-auth0';
import { FormField } from '@/components/formfield';
import { api } from '@/apiHandler/fetcherBase';
import BirthDateField from './birthdate-field';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { regions } from '@/content';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface ReservationFormProps {
  user: Claims;
}

export function ReservationForm({ user }: ReservationFormProps) {
  const [isCheckingGamertag, setIsCheckingGamertag] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formMethods = useForm<ReservationFormData>({
    resolver: zodResolver(ReservationformSchema),
    defaultValues: {
      firstName: user?.given_name ?? '',
      lastName: user?.family_name ?? '',
      email: user?.email ?? '',
      gamertag: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      region: '',
    },
    mode: 'onChange',
  });

  const {
    formState: { errors, dirtyFields, isDirty },
    handleSubmit,
    resetField,
    reset,
    setError,
    clearErrors,
    register,
    control,
    watch,
    setValue,
    getValues,
  } = formMethods;

  const excludedFields = ['email', 'firstName', 'lastName'];

  const inputFields = Object.keys(getValues()).filter(
    (key) => !excludedFields.includes(key),
  );
  const isEveryInputDirty = inputFields.reduce((prev, curr) => {
    const isFieldDirty = dirtyFields[curr as keyof ReservationFormData];
    if (!isFieldDirty) return false;
    return prev && isFieldDirty;
  }, true);

  const isValid =
    isEveryInputDirty && (Object.keys(errors).length === 0 || !isDirty);

  const checkGamertagAvailability = useMemo(
    () =>
      debounce(async (tag: string) => {
        try {
          const { available: isAvailable } = await api.get(
            `/v1/gamertag/availability/${tag}`,
            undefined,
            { auth: true },
          );
          setIsCheckingGamertag(false);
          if (!isAvailable) {
            setError('gamertag', {
              type: 'manual',
              message: 'Gamer Tag Unavailable',
            });
          } else {
            clearErrors('gamertag');
          }
        } catch (e) {
          setIsCheckingGamertag(false);
          setError('gamertag', {
            type: 'manual',
            message: 'There has been an error, try again later',
          });
        }
      }, 500),
    [setError, clearErrors],
  );

  const gamerTagChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        e.target.value.length < 3 ||
        e.target.value.length > 15 ||
        !gamertagRegex.test(e.target.value)
      )
        return;

      setIsCheckingGamertag(true);
      checkGamertagAvailability(e.target.value);
    },
    [checkGamertagAvailability],
  );

  const onSubmit = async (values: ReservationFormData) => {
    try {
      setLoading(true);
      await api.post(
        `/v1/gamertag/create`,
        {
          ...values,
          userId: user.sub,
        },
        {
          auth: true,
        },
      );
      setLoading(false);
      setSubmitted(true);
      reset();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-[32px] 1920:text-[42px] uppercase text-left sm:text-center tracking-wide leading-[1] text-primary font-bold font-[family-name:var(--font-nippo)]">
        {submitted
          ? 'Your Path to Glory is Secured!'
          : 'Who do you want to be?'}
      </h1>
      {submitted ? (
        <p className="text-center my-3 text-muted-foreground text-[16px]">
          Thank you for reserving your gamertag, we’re thrilled to have you and
          can’t wait to see you rise to the occasion! Keep an eye out for
          further instructions to finalize registration.
          <br />
          <br />
          You can safely close this page
        </p>
      ) : (
        <>
          <p className="text-[20px] 1920:text-[24px] mt-3 font-[family-name:var(--font-nippo)]">
            Welcome, <br /> {user?.email}
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full py-3 rounded-lg space-y-6 flex flex-col items-center justify-center"
          >
            <div className="space-y-5">
              <div>
                <h2 className="text-primary uppercase text-md 1920:text-[18px] font-bold mb-1 font-[family-name:var(--font-nippo)]">
                  What's your name?
                </h2>
                <div className="space-y-4">
                  <FormField
                    label="First Name"
                    id="firstName"
                    register={register}
                    error={errors.firstName}
                    placeholder="Sol"
                    onClear={() => resetField('firstName')}
                    isDirty={dirtyFields.firstName}
                  />
                  <FormField
                    label="Last Name"
                    id="lastName"
                    register={register}
                    error={errors.lastName}
                    placeholder="Badguy"
                    onClear={() => resetField('lastName')}
                    isDirty={dirtyFields.lastName}
                  />
                </div>
              </div>

              <BirthDateField
                register={register}
                errors={errors}
                watch={watch}
                setValue={setValue}
              />

              <div className="space-y-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-400"
                >
                  Region
                </label>
                <Controller
                  control={control}
                  name="region"
                  render={({ field }) => (
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
                        {regions.map((region) => (
                          <SelectItem
                            key={region.value}
                            value={region.value}
                            className="cursor-pointer h-[46px]"
                          >
                            {region.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.region && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.region.message}
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-primary uppercase text-md 1920:text-[18px] font-bold mb-1 font-[family-name:var(--font-nippo)]">
                  What's your Gamer Tag?
                </h2>
                <p className="text-muted-foreground text-[12px] 1920:text-sm mb-2">
                  Gamer tag is your ID in the one shot universe. Choose well --
                  the ability to change it comes at a price.
                </p>
                <FormField
                  label="Gamer Tag"
                  id="gamertag"
                  register={register}
                  error={errors.gamertag}
                  onChange={gamerTagChange}
                  placeholder="CoolDude2000"
                  isDirty={dirtyFields.gamertag}
                  isChecking={isCheckingGamertag}
                  onClear={() =>
                    setValue('gamertag', '', { shouldValidate: true })
                  }
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={!isValid || isCheckingGamertag}
              className="max-w-[225px] w-full"
            >
              Reserve Gamer Tag
              {loading && <LoadingSpinner className="ml-2" />}
            </Button>
          </form>
        </>
      )}
    </>
  );
}
