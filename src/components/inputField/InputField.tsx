import { FormControl, TextField } from "@mui/material";

export const InputField = ({ label }) => {
  return (
    <FormControl fullWidth>
      <TextField
        required
        variant="outlined"
        label={label}
      />
    </FormControl>
  );
};
