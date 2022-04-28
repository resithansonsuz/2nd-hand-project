import Image from 'next/image'
import { Formik } from 'Formik'
import loginpic from '../../assets/images/Form.png'
import logo from '../../assets/logo/Logo.svg'
import Link from 'next/link'
import { FormSchema } from '../../constants/yupSchema'
import  styles from  './register.module.scss'

function RegisterPage() {
  return (
    
    <div className={ styles.container}>
      <div className={ styles.fixed}>
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
        onSubmit={(auth) => {
          console.log(auth)
        }}
        validationSchema={FormSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <div class={styles.formContainer}>
            <div class={ styles.operation}>
              <div className={ styles.logo}>
                <Image src={logo} />
              </div>

              <div className={ styles.form}>
                <div class={ styles.title}>
                  <h1 className={ styles.formTitle}>Üye Ol</h1>
                  <p className={ styles.formSubTitle}>
                    Fırsatlardan yararlanmak için üye ol!
                  </p>
                </div>

                <div class={ styles.wrapper}>
                  <label className={ styles.label}>Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email@example.com"
                    value={values.email}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.email && touched.email && (
                  <span className={styles.errors}>{errors.email}</span>
                )}

                <div class={ styles.wrapper}>
                  <label className={styles.label}>Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  ></input>
                </div>
                {errors.password && touched.password && (
                  <span className={styles.errors}>{errors.password}</span>
                )}
                <div class={ styles.submit}>
                  <button
                    text="Giriş"
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Üye Ol
                  </button>
                </div>

                <div className={ styles.noAccount}>
                  Hesabın var mı?{' '}
                  <Link href="/LoginPage/LoginPage">
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
