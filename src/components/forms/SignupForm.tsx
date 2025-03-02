import { useState } from 'react'
import { FormLink, FormWrapper, Input, Label, LogoWrapp, MainTitle, RouteWrapp, ShowBtn, StyledForm } from './Form.styled';
import { SiLazarus } from 'react-icons/si';
import { Button } from '../button/Button';
import { AuthResponse, register  } from '../../redux/auth/operations';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {  useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchemaType, useSignUpSchema } from '../../hooks/useSignUpSchema';
import { Notify } from 'notiflix';
import { useAuth } from '../../hooks/useAuth';
import capitalize from '../../lib/capitalize';

const SignupForm = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const lang = useLanguage()
  const {isLoading} = useAuth()
  const {signUpSchema} = useSignUpSchema()

    const {
      register: rg, 
      handleSubmit,
      formState,
      reset,
      setError,
    } = useForm<SignUpSchemaType >({
      defaultValues: {  
        name: '',
        email: '',
        password: ''
         },
          mode:'all',
          resolver: zodResolver(signUpSchema), })
      const {
        errors,
        isDirty,
        isValid ,
        isSubmitting,
        // isLoading:loading 
      } = formState

  const handleInputChange =() => {
   }

  const onSubmit = (data: SignUpSchemaType)=> {
   
    dispatch(register(data))
    .then((res) => {
      console.log(res);
      if(res.type === 'auth/register/rejected'){
        const errorCode = res.payload as string; // Ensure it's a string
        const translatedMsg = lang[errorCode] || errorCode;
        // setError('email', { type: 'manual', message: res.payload as string });
        setError('email', { type: 'manual', message: translatedMsg  }  )
      }
      if(res.type === 'auth/register/fulfilled'){
        reset()
        navigate('/login')
      }
      if ((res.payload as AuthResponse).success) {
        const newusername = (res.payload as AuthResponse).user.name || 'Dude';
        Notify.success(`${lang.regSuccess}, ${capitalize(newusername)}`)
      }
    })
  };

  return (
    <FormWrapper>
       <LogoWrapp ><SiLazarus size={50}/></LogoWrapp>
      <MainTitle>{lang.regBtn}</MainTitle>

      <StyledForm 
      autoComplete="off" 
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
        <Label >
        {lang.name}
          <Input
        {...rg('name',{ onChange: handleInputChange })}
        placeholder=	{( isSubmitting )? "Processing" : lang.phName}
        />
        </Label>
        {errors.name && <div className='text-purple-900'>{errors.name.message}</div>}
        <Label >
        {lang.email}
          <Input
           {...rg('email',{ onChange: handleInputChange })}
           placeholder=	{( isSubmitting )? "Processing" : lang.phEmail}
         />
        </Label>
        {errors.email && <div className='text-purple-900'>{errors.email.message}</div>}
        <Label >
        {lang.pass}
          <Input
            {...rg('password',{ onChange: handleInputChange } )}
            placeholder=	{( isSubmitting )? "Processing" : "••••"}
            type = {show ? 'text' : 'password' }
          />
            <ShowBtn 
            type='button' 
            onClick={() => setShow(!show)}>
              {show ? lang.hide : lang.show}
              </ShowBtn>
        </Label>
        {errors.password && <div className='text-purple-900'>{errors.password.message}</div>}
          <Button  
          type="submit"
          disabled={isLoading || !isDirty || !isValid }>
            { isLoading  ? "Sending.." :  lang.regSubmit}
          </Button>

      </StyledForm>
      <RouteWrapp>
        <p>{lang.alreadyGot}</p>
        <FormLink to="/login">{lang.logBtn}</FormLink>
      </RouteWrapp>
    </FormWrapper>
  );
}

export default SignupForm