import LoginForm from '../components/forms/LoginForm';
import { useLanguage } from '../hooks/useLanguage';
import { AuthWrapper } from './Pages.styled';

const LoginPage = () => {
   const lang = useLanguage()
  return (
    <AuthWrapper className='login__bg '>
    <div className='login__wrap'>
      <div>
        <title>{lang.logBtn}</title>
      </div>
      <LoginForm />
    </div>
    </AuthWrapper>
  );
}
export default LoginPage