import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./Form";
import { Input } from "../Input/Input";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  type: HTMLInputElement["type"];
  label?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  className?: string;
};

function FormInput<T extends FieldValues>({
  name,
  type = "text",
  label,
  required = false,
  placeholder,
  description,
  className,
}: FormInputProps<T>) {
  return (
    <FormField
      control={useFormContext().control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel required={required}>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              required={required}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export { FormInput };
