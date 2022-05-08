
import RegisterPage from '../components/RegisterPage/RegisterPage'
import { AuthProvider } from '../context/auth';

function Register() {
  //Sign up page that I wrapped with auth context
  return (
    <>
      <AuthProvider>
      <RegisterPage />
      </AuthProvider>
    </>
  )
}
export default Register;