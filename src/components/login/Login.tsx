import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

interface IFormInput {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h1>войти</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>login</label>
        <input
          {...register("login", {
            required: {
              value: true,
              message: "заполните поле",
            },
            maxLength: {
              value: 15,
              message: "максимальная длина поля 15 символов",
            },
          })}
        />
        {errors?.login && <p>{`${errors.login.message}`}</p>}
        <input
          {...register("email", {
            required: {
              value: true,
              message: "заполните поле",
            },
          })}
        />
        {errors?.email && <p>{`${errors.email.message}`}</p>}
        <input
          {...register("password", {
            required: {
              value: true,
              message: "заполните поле",
            },
            minLength: {
              value: 8,
              message: "Длина пароля должна быть больше 8 символов",
            },
          })}
        />
        {errors?.password && <p>{`${errors.password.message}`}</p>}
        <input
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "заполните поле",
            },
            validate: (value) => {
              return value === getValues("password") || "пароль не совпадает";
            },
          })}
        />
        {errors?.confirmPassword && (
          <p>{`${errors.confirmPassword.message}`}</p>
        )}
        <input
          type="submit"
          disabled={!isValid}
        />
      </form>
    </>
  );
};
