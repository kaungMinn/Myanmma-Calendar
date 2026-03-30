import type { FieldValues, UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import ImageInputOptimized from "./image-input-optimized";

function HookFormImageInputOptimized<T extends FieldValues>({ form, name, label = "Attachment Image" }: { form: UseFormReturn<T>; name: keyof T; label?: string }) {
  return (
    <FormField
      control={form.control}
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <ImageInputOptimized
              initialImageUrl={field.value}
              onFileChange={file => field.onChange(file)}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}

export default HookFormImageInputOptimized;
