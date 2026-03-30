import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "../ui/input";

function HookformInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  type = "text",
  isRequired = false,
  disabled = false,
}: {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "file";
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
            {isRequired && <span className="">*</span>}
          </FormLabel>
          <FormControl>
            <Input
              disabled={disabled}
              type={type}
              placeholder={placeholder}
              {...field}
              value={type === "file" ? undefined : field.value}
              onChange={(e) => {
                if (type === "file") {
                  const file = e.target.files?.[0];
                  field.onChange(file);
                }
                else {
                  field.onChange(e.target.value);
                }
              }}
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

export default HookformInput;
