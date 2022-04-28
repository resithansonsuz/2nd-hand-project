import Image from 'next/image'
import { Formik } from 'Formik'
import loginpic from '../../assets/images/Form.png'
import logo from '../../assets/logo/Logo.svg'
import Link from 'next/link'
import { FormSchema } from '../../constants/yupSchema'
import styles from './login.module.scss'

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.fixed}>
        <Image
          className={styles.loginpic}
          src={loginpic}
          alt="Website login image"
          max-width={835}
          max-height={1080}
        />
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={FormSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <div class={styles.formContainer}>
            <div class={styles.operation}>
              <div className={styles.logo}>
                <Image src={logo} />
              </div>

              <div className={styles.form}>
                <div class={styles.title}>
                  <h1 className={styles.formTitle}>Giriş Yap</h1>
                  <p className={styles.formSubTitle}>
                    Fırsatlardan yararlanmak için giriş yap!
                  </p>
                </div>

                <div class={styles.wrapper}>
                  <label className={styles.label}>Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email@example.com"
                    value={values.name}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.email && touched.email && (
                  <span className={styles.errors}>{errors.email}</span>
                )}

                <div className={styles.wrapper}>
                  <label className={styles.label}>Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.name}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.password && touched.password && (
                  <span className={styles.errors}>{errors.password}</span>
                )}

                <span className={styles.lostPassword}>Şifremi Unuttum</span>

                <div className={styles.submit}>
                  <button
                    className={styles.button}
                    text="Giriş"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Giriş
                  </button>
                </div>

                <div className={styles.noAccount}>
                  Hesabın yok mu?{' '}
                  <Link href="/RegisterPage/RegisterPage">
                    <a>Üye Ol</a>
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
export default LoginPage
