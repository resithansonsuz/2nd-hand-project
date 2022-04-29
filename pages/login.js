import LoginPage from '../components/LoginPage/LoginPage'
import { AuthProvider } from '../context/auth';

function Login() {
  return (
    <>
     <AuthProvider>
      <LoginPage />
      </AuthProvider>
    </>
  )
}
export default Login;
