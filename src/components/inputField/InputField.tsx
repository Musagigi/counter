import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface IField {
  label: string;
  control: any;
  name: string;
  errors: any;
}

export const InputField: React.FC<IField> = ({
  label,
  name,
  control,
  errors,
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
            error={!!errors}
            helperText={errors ? errors?.message : ""}
            sx={{ margin: "10px" }}
          />
        )}
      />
    </FormControl>
  );
};
