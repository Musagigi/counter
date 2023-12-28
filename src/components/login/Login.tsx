import { useForm, SubmitHandler } from "react-hook-form";
import { Link, redirect } from "react-router-dom";
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
    const dataUser = localStorage.getItem("user");
    const parseDataUser = JSON.parse(dataUser);

    if (
      parseDataUser.login === data.login &&
      parseDataUser.password === data.password
    ) {
      localStorage.setItem("log", JSON.stringify(data));
    }

    reset();
    // redirect("/signup");
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
