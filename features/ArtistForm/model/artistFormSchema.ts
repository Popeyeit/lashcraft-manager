import * as yup from "yup";
export const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), ""], "Passwords must match"),
    role: yup.string().required(),
    birthDay: yup.date().required(),
    percent: yup.number().required(),
  })
  .required();
