import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputField } from "../inputField/InputField";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

interface IFormInput {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  login: yup
    .string()
    .min(2, "минимум 2 символа")
    .max(20, "максимум 20 символов")
    .required("поле является обязательным"),
  email: yup
    .string()
    .email("введите валидную почту")
    .required("поле является обязательным"),
  password: yup
    .string()
    .min(4, "минимум 4 символа")
    .max(16, "максимум 16 символов")
    .required("поле является обязательным"),
  confirmPassword: yup
    .string()
    .required("поле является обязательным")
    .oneOf([yup.ref("password"), null], "пароли не совпадают"),
});

export const SignUp = () => {
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
        label="email"
        name="email"
        errors={errors.email}
        {...register("email")}
      />
      <InputField
        control={control}
        label="password"
        name="password"
        errors={errors.password}
        {...register("password")}
      />
      <InputField
        control={control}
        label="confirm password"
        name="confirmPassword"
        errors={errors.confirmPassword}
        {...register("confirmPassword")}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!isValid}
        fullWidth
        sx={{ mt: 4, padding: 1 }}
      >
        Sign Up
      </Button>
      <p>
        уже зарегистированы? <Link to={"/login"}>войти</Link>
      </p>
    </Box>
  );
};
