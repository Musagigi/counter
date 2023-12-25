import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  login: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const dataForSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <h1>войти</h1>
      <form onSubmit={handleSubmit(dataForSubmit)}>
        <label>login</label>
        <input {...register("login")} />
      </form>
    </>
  );
};
