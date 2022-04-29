
import RegisterPage from '../components/RegisterPage/RegisterPage'
import { AuthProvider } from '../context/auth';

function Register() {
  return (
    <>
      <AuthProvider>
      <RegisterPage />
      </AuthProvider>
    </>
  )
}
export default Register;