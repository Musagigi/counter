import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "../inputField/InputField";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { schemaLogin } from "../../utils/yupSchema/schemas";

interface IFormInput {
  login: string;
  password: string;
}

const schema = schemaLogin;

export const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");

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
    const dataUser = localStorage.getItem("user");

    if (dataUser) {
      const parseDataUser = JSON.parse(dataUser);

      if (
        parseDataUser.login === data.login &&
        parseDataUser.password === data.password
      ) {
        localStorage.setItem("log", JSON.stringify(data));
        reset();
        navigate("/");
      } else {
        setErr("неверный логин или пароль");
      }
    } else {
      setErr("у вас нет аккаунта");
    }
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
        err={err}
        errors={errors}
        {...register("login")}
      />
      <InputField
        control={control}
        label="password"
        name="password"
        err={err}
        errors={errors}
        {...register("password")}
      />
      {err && <p>{err}</p>}
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
        нет аккаунта? <Link to={"/signup"}>регистрация</Link>
      </p>
    </Box>
  );
};
