import { memo } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from './ui/loading-spinner';

interface FormFieldProps {
  label: string;
  id: string;
  register: any;
  error?: any;
  disabled?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDirty?: boolean;
  isChecking?: boolean;
  onClear: () => void;
}

export const FormField = memo(function FormField({
  label,
  id,
  register,
  error,
  disabled,
  placeholder,
  onChange,
  isDirty,
  isChecking,
  onClear,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          {...register(id, { onChange })}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          className={cn(
            'h-[40px] bg-transparent border border-muted-foreground rounded-sm text-foreground placeholder-muted-foreground pr-10',
            'focus:!ring-2 focus:ring-primary focus:ring-offset-0',
            {
              'border-danger focus:border-danger focus:!ring-0':
                isDirty || error,
              'border-caution focus:border-caution focus:!ring-0':
                isDirty && isChecking,
              'border-muted-foreground focus:border-primary':
                isDirty && !error && !isChecking,
              'focus:border-primary': !isDirty,
              'bg-gray-900 text-gray-400': disabled,
            },
          )}
        />
        {isDirty && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            normal
            className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 p-0 hover:bg-transparent hover:text-muted-foreground focus:border-primary focus-visible:ring-primary"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear input</span>
          </Button>
        )}
      </div>
      {isChecking && (
        <p className="mt-2 text-xs text-caution flex items-center gap-2 justify-start">
          Checking availability... <LoadingSpinner />
        </p>
      )}
      {isDirty && !error && !isChecking && id === 'gamertag' && (
        <p className="mt-2 text-xs text-success">Gamertag is available</p>
      )}
      {error && <p className="mt-2 text-xs text-danger">{error.message}</p>}
    </div>
  );
});

export default FormField;
