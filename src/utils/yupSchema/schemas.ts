import * as yup from "yup";

export const schemaLogin = yup.object({
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

export const schemaRegister = yup.object({
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
