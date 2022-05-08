import LoginPage from '../components/LoginPage/LoginPage'
import { AuthProvider } from '../context/auth';

function Login() {
  //The login page that I wrapped with auth context
  return (
    <>
     <AuthProvider>
      <LoginPage />
      </AuthProvider>
    </>
  )
}
export default Login;
