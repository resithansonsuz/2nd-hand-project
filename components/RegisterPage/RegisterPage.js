import Image from 'next/image'
import { Formik } from 'Formik'
import loginpic from '../../assets/images/Form.png'
import logo from '../../assets/icon/Logo.svg'
import Link from 'next/link'
import { FormSchema } from '../../constants/yupSchema'
import styles from './register.module.scss'
import React, { useState } from 'react'
import { useAuth } from '../../context/auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

function RegisterPage() {
  const [openError, setOpenError] = useState(false)
  const { UserRegister } = useAuth()
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        <Image
          className={styles.loginpic}
          src={loginpic}
          alt="Website login image"
        />
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (values) => {
          const status = await UserRegister(values.email, values.password)
          switch (status) {
            case 400:
              toast.error('Emaile ait kayıtlı bir kullanıcı bulunmaktadır. ', {
                position: 'top-right',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
              })
              break

            default:
              toast.success(
                'Kaydınızı başarıyla yaptınız ana sayfaya yönlendiriliyorsunuz.',
                {
                  position: 'top-right',
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true
                }
              )
              setTimeout(() => {
                router.push('/')
              }, 4000)
              break
          }
        }}
        validationSchema={FormSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur
        }) => (
          <div className={styles.formContainer}>
            <div className={styles.operation}>
              <div className={styles.logo}>
                <Image src={logo} />
              </div>

              <div className={styles.form}>
                <div className={styles.title}>
                  <h1 className={styles.formTitle}>Üye Ol</h1>
                  <p className={styles.formSubTitle}>
                    Fırsatlardan yararlanmak için üye ol!
                  </p>
                </div>

                <div
                  className={
                    touched.email && values.email !== '' && errors.email
                      ? `${styles.wrapper} ${styles.error}`
                      : styles.wrapper
                  }
                >
                  <label className={styles.label}>Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                {errors.email && touched.email && openError && (
                  <span className={styles.error}>{errors.email}</span>
                )}

                <div
                  className={
                    touched.password &&
                    values.password !== '' &&
                    errors.password
                      ? `${styles.wrapper} ${styles.error}`
                      : styles.wrapper
                  }
                >
                  <label className={styles.label}>Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                {errors.password && touched.password && openError && (
                  <span className={styles.errors}>{errors.password}</span>
                )}
                <div className={styles.submit}>
                  <button
                    text="Giriş"
                    className="button"
                    type="submit"
                    onClick={() => {
                      setOpenError(true)
                      handleSubmit()
                    }}
                  >
                    Üye Ol
                  </button>
                </div>

                <div className={styles.noAccount}>
                  Hesabın var mı?{' '}
                  <Link href="/login">
                    <a>Giriş Yap</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
export default RegisterPage
