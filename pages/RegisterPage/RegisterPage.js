import Image from 'next/image'
import { Formik } from 'Formik'
import loginpic from '../../assets/images/Form.png'
import logo from '../../assets/logo/Logo.svg'
import Link from 'next/link'
import { FormSchema } from '../../constants/yupSchema'

function LoginPage() {
  return (
    <div className="container">
      <div className="fixed">
        <Image
          className="loginpic"
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
        {({ values, handleChange, handleSubmit, alert }) => (
          <div class="formContainer">
            <div class="operation">
              <div className="logo">
                <Image src={logo} />
              </div>

              <div className="form">
                <div class="title">
                  <h1 className="formTitle">Üye Ol</h1>
                  <p className="formSubTitle">
                    Fırsatlardan yararlanmak için üye ol!
                  </p>
                </div>

                <div class="wrapper">
                  <label className="label">Email</label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Email@example.com"
                    value={values.name}
                    onChange={handleChange}
                  ></input>
                </div>

                <div class="wrapper">
                  <label className="label">Şifre</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div class="submit">
                  <button
                    text="Giriş"
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Üye Ol
                  </button>
                </div>

                <div className="noAccount">
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
export default LoginPage
