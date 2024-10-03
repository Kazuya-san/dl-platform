import { useCallback } from 'react';
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { ReservationFormData } from './reservation-form.schema';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const BirthDateField = ({
  register,
  errors,
  watch,
  setValue,
}: {
  register: UseFormRegister<ReservationFormData>;
  errors: FieldErrors<ReservationFormData>;
  watch: UseFormWatch<ReservationFormData>;
  setValue: UseFormSetValue<ReservationFormData>;
}) => {
  const formatDateInput = useCallback((value: string, max: number) => {
    return value.slice(0, max);
  }, []);

  const birthMonth = watch('birthMonth');
  const birthDay = watch('birthDay');

  const isDayDisabled = !birthMonth || !!errors.birthMonth;
  const isYearDisabled =
    !birthMonth || !birthDay || !!errors.birthMonth || !!errors.birthDay;

  const handleClear = (field: 'birthMonth' | 'birthDay' | 'birthYear') => {
    setValue(field, '', { shouldValidate: true });
  };

  const commonInputClass = cn(
    'h-[40px] bg-transparent border border-muted-foreground rounded-sm text-foreground placeholder-muted-foreground',
    'focus:ring-2 focus:ring-primary focus:border-primary focus:ring-offset-0',
  );

  const renderInput = (
    id: 'birthMonth' | 'birthDay' | 'birthYear',
    placeholder: string,
    maxLength: number,
    disabled: boolean = false,
  ) => (
    <div className="relative">
      <Input
        type="number"
        id={id}
        {...register(id, {
          onChange: (e) => {
            e.target.value = formatDateInput(e.target.value, maxLength);
          },
        })}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(commonInputClass, {
          'border-red-500 focus:border-red-500 focus:!ring-0': errors[id],
          'opacity-50': disabled,
          'w-16 sm:w-24': id !== 'birthYear',
          'w-full max-w-[150px]': id === 'birthYear',
        })}
      />
      {watch(id) && !disabled && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 p-0 hover:bg-transparent hover:text-muted-foreground focus:border-primary focus-visible:ring-primary"
          onClick={() => handleClear(id)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Clear {id}</span>
        </Button>
      )}
    </div>
  );

  return (
    <div>
      <Label htmlFor="birthMonth" className="block mb-2">
        Birthdate
      </Label>
      <div className="flex space-x-2">
        {renderInput('birthMonth', 'mm', 2)}
        <span className="text-foreground self-center">/</span>
        {renderInput('birthDay', 'dd', 2, isDayDisabled)}
        <span className="text-foreground self-center">/</span>
        {renderInput('birthYear', 'yyyy', 4, isYearDisabled)}
      </div>
      {(errors.birthMonth || errors.birthDay || errors.birthYear) && (
        <p className="text-red-500 text-xs mt-2">
          {errors.birthYear
            ? errors.birthYear.message
            : 'Please enter a valid date of birth'}
        </p>
      )}
    </div>
  );
};

export default BirthDateField;
