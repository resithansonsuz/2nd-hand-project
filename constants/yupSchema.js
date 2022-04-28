import * as yup from "yup";
export const FormSchema = yup.object().shape({

  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("*Eposta alanı zorunludur.*"),

  password: yup
    .string()
    .min(8,"Şifre en az 8 karakter olmalıdır")
    .max(20,"Şifre en fazla 20 karakter olmalıdır")
    .required("*Şifre alanı zorunludur*")
    .matches(/^(?=.*[a-z])/, "Şifre en az bir küçük harf içermelidir")
    .matches(/^(?=.*[A-Z])/, "Şifre en az bir büyük harf içermelidir")
    .matches(/^(?=.*[0-9])/, "Şifre en az bir rakam içermelidir"),
});