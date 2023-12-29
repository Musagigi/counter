import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface IField {
  label: string;
  control: any;
  name: string;
  errors: any;
  err: string;
}

export const InputField: React.FC<IField> = ({
  label,
  name,
  control,
  errors,
  err,
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            required
            variant="outlined"
            label={label}
            error={!!errors[name] || !!err}
            helperText={errors[name] ? errors[name]?.message : ""}
            sx={{ margin: "10px" }}
          />
        )}
      />
    </FormControl>
  );
};
