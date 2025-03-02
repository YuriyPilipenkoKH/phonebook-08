import LoginForm from '../components/forms/LoginForm';
import Loader from '../components/loader/Loader';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { AuthWrapper } from './Pages.styled';

const LoginPage = () => {
   const lang = useLanguage()
   const {isLoading} = useAuth()
  return (
    <>
      <AuthWrapper className='login__bg AuthWrapper'>
      <div className='login__wrap'>
        <div>
          <title>{lang.logBtn}</title>
        </div>
        <LoginForm />
      </div>
      </AuthWrapper>
      {isLoading && <Loader/>}
    </>
  );
}
export default LoginPage