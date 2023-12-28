import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../inputField/InputField";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { schemaRegister } from "../../utils/yupSchema/schemas";

interface IFormInput {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = schemaRegister;

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
    localStorage.setItem("user", JSON.stringify(data));
    // console.log(data);
    // console.log(JSON.parse(localStorage.getItem("user")));
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
