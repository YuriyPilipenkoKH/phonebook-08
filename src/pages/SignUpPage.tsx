import SignupForm from '../components/forms/SignupForm';
import { useLanguage } from '../hooks/useLanguage'
import { AuthWrapper } from './Pages.styled';

const SignUpPage = () => {
 const lang = useLanguage()
  return (
    <AuthWrapper className='login__bg '>
    <div className='login__wrap'>
        <title>{lang.regBtn} </title>
      <SignupForm />
    </div>
    </AuthWrapper>
  );
}
export default SignUpPage