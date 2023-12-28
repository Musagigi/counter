import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../inputField/InputField";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

interface IFormInput {
  login: string;
  password: string;
}

const schema = yup.object({
  login: yup
    .string()
    .min(2, "минимум 2 символа")
    .max(20, "максимум 20 символов")
    .required("поле является обязательным"),
  password: yup
    .string()
    .min(4, "минимум 4 символа")
    .max(16, "максимум 16 символов")
    .required("поле является обязательным"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      maxWidth="sm"
    >
      <InputField
        control={control}
        label="login"
        name="login"
        errors={errors.login}
        {...register("login")}
      />
      <InputField
        control={control}
        label="password"
        name="password"
        errors={errors.password}
        {...register("password")}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!isValid}
        fullWidth
        sx={{ mt: 4, padding: 1 }}
      >
        Log In
      </Button>
      <p>
        не зарегистированы? <Link to={"/signup"}>зарегистрироваться</Link>
      </p>
    </Box>
  );
};
