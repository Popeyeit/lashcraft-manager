import * as yup from "yup";
export const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
