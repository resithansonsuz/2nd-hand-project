import * as yup from "yup";
export const FormSchema = yup.object().shape({

  //yup scheme, which allows writing e-mail and password according to certain rules

  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("*Eposta alanı zorunludur.*"),

  password: yup
    .string()
    .min(8,"Şifre en az 8 karakter olmalıdır")
    .max(20,"Şifre en fazla 20 karakter olmalıdır")
    .required("*Şifre alanı zorunludur*")
});