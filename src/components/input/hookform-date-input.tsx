import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import DatePicker from "../date-picker/date-picker";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";

function HookformDateInput<T extends FieldValues>({ form, name, label = "Date", isRequired, disabled = false }: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            {label}
            {isRequired && <span>*</span>}
          </FormLabel>

          <FormControl>
            <DatePicker
              value={field.value}
              disabled={disabled}
              onChange={field.onChange}
              className="w-full"
            />
          </FormControl>
          <div className="min-h-5 pt-1">
            <FormMessage />
          </div>

        </FormItem>
      )}
    />
  );
}

export default HookformDateInput;
