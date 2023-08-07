import * as yup from "yup";

export const schema = yup
  .object({
    customerName: yup.string().required(),
    amount: yup.number().required(),
    tip: yup.number(),
    service: yup.string().required(),
    paymentMethod: yup
      .mixed()
      .oneOf(["CASH", "ZELLE", "CARD", "VENMO"])
      .required(),
  })
  .required();
