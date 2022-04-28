import Image from 'next/image'
import { Formik } from 'Formik'
import loginpic from '../../assets/images/Form.png'
import logo from '../../assets/logo/Logo.svg'
import Link from 'next/link'
import { FormSchema } from '../../constants/yupSchema'
import styles from './login.module.scss'
import react,{useState} from 'react'


function LoginPage() {


  const [openError,setOpenError ] =useState(false);
  
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
        {({ values, handleChange, handleSubmit, errors, touched,handleBlur }) => (
          <div className={styles.formContainer}>
            <div className={styles.operation}>
              <div className={styles.logo}>
                <Image src={logo} />
              </div>

              <div className={styles.form}>
                <div className={styles.title}>
                  <h1 className={styles.formTitle}>Giriş Yap</h1>
                  <p className={styles.formSubTitle}>
                    Fırsatlardan yararlanmak için giriş yap!
                  </p>
                </div>

                <div className={ (touched.email && values.email!== "" && errors.email) ? `${styles.wrapper} ${styles.error}` : styles.wrapper}>
                  <label className={styles.label}>Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email@example.com"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>

                </div>
                {errors.email && touched.email && openError && 
                  <span className={styles.errors}>{errors.email}</span>
                }

                <div className={ (touched.password && values.password!== "" && errors.password) ? `${styles.wrapper} ${styles.error}` : styles.wrapper}>
                  <label className={styles.label}>Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                </div>
                {errors.password && touched.password && openError && 
                  <span className={styles.errors}>{errors.password}</span>
                }

                <span className={styles.lostPassword}>Şifremi Unuttum</span>

                <div className={styles.submit}>
                  <button
                    className={styles.button}
                    text="Giriş"
                    type="submit"
                    onClick={()=>{setOpenError(true);handleSubmit();}}
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
