import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
    reset();
    navigate("/");
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
        err=""
        errors={errors}
        {...register("login")}
      />
      <InputField
        control={control}
        label="email"
        name="email"
        err=""
        errors={errors}
        {...register("email")}
      />
      <InputField
        control={control}
        label="password"
        name="password"
        err=""
        errors={errors}
        {...register("password")}
      />
      <InputField
        control={control}
        label="confirm password"
        name="confirmPassword"
        err=""
        errors={errors}
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
        уже есть аккаунт? <Link to={"/login"}>войти</Link>
      </p>
    </Box>
  );
};
