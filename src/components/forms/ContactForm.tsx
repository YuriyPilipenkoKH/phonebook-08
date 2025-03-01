import  { useEffect, useState } from 'react'
import { ContactFormBtn, Form, Input, Label } from './Form.styled';
import { useLanguage } from '../../hooks/useLanguage';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addContact, PB_update_Response } from '../../redux/contacts/operations';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Lottie from 'lottie-react';
import { AddContactSchemaType, useAddContactSchema } from '../../hooks/useAddContactSchema';
import { useAll } from '../../hooks/useAll';
import { Notify } from 'notiflix';
import { useAuth } from '../../hooks/useAuth';
import IconRedux from '../../img/icons/iconRedux';
import IconReact from '../../img/icons/iconReact';

const CLOUDINARY_JSON_URL = 'https://res.cloudinary.com/dwdkw1a4j/raw/upload/v1740862388/phonebook-08/assets/animation/fwhfhdqtpqbergilkrjr.json'


const ContactForm = () => {
  const [newAdded, setNewAdded] = useState(false)
  const [animationData, setAnimationData] = useState(null);
  const lang = useLanguage()
  const dispatch = useAppDispatch()
  const {addContactSchema} = useAddContactSchema()
  const { language, genContact} = useAll()
  const { isAdmin } = useAuth()

  const {
    register, 
    handleSubmit,
    formState,
    reset,
    setValue,
    setError,
  } = useForm<AddContactSchemaType >({
    defaultValues: {  
      name:  '',
      number:  '',
       },
        mode:'all',
        resolver: zodResolver(addContactSchema), })
    const {
      errors,
      isSubmitting,
      isLoading 
    } = formState

    useEffect(() => {
      setValue('name', genContact.name)
      setValue('number', genContact.number)
    }, [genContact])
    

  const onSubmit = async (data: AddContactSchemaType) => {
   dispatch(addContact(data))
   .then((res) => {
    console.log(res);
    if(res.type === 'contacts/addContact/rejected'){
      const errorCode = res.payload as string; 
      const translatedMsg = lang[errorCode] || errorCode;
      // const translatedMsg = (lang as Record<string, string>)[errorCode] || errorCode;
      // setError('number', { type: 'manual', message: res.payload as string }  )
      setError('number', { type: 'manual', message: translatedMsg  }  )
    }
    if(res.type === 'contacts/addContact/fulfilled'){
      const newContactName = (res.payload as PB_update_Response).contact.name 
      Notify.success(`${newContactName} ${lang.addSuccess}`)
      reset()
      setNewAdded(true)
      setTimeout(() => setNewAdded(false), 2000)
    }
  }).catch((rej) => console.log(rej))
  }

  useEffect(() => {
    fetch(CLOUDINARY_JSON_URL)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation', err));
  }, []);

  return (
    <Form 
    autoComplete="off" 
    noValidate
     onSubmit={handleSubmit(onSubmit)}>
      <Label>
      {lang.name}:
        <Input
        {...register('name',)}
          placeholder=	{( isSubmitting )? "Processing" : lang.namePlaceholder}
        />
      </Label>
      {errors.name && <div className='text-purple-900'>{errors.name?.message}</div>}
      <Label>
      {lang.number}:
        <Input
        {...register('number',)}
        placeholder=	{( isSubmitting )? "Processing" : '0980001204'}
        />
      </Label>
      {errors.number && <div className='text-purple-900'>{errors.number?.message}</div>}
      <ContactFormBtn 
      type="submit"
      disabled = { isAdmin 
        ? isSubmitting 
        : (isSubmitting )} > 
        
               { isLoading  ? "Sending.." :  lang.add}
              {' '}{ language === 'english' ? <IconRedux /> : <IconReact />  }
      </ContactFormBtn>
             {newAdded && <Lottie animationData={animationData} className="new"/>}
            
    </Form>
  );
};

export default ContactForm

//|| !isDirty || !isValid 
//https://res.cloudinary.com/dwdkw1a4j/raw/upload/v1740862401/phonebook-08/assets/animation/q6kfyvi1qfijaapg2dk3.json

//https://res.cloudinary.com/dwdkw1a4j/raw/upload/v1740862388/phonebook-08/assets/animation/fwhfhdqtpqbergilkrjr.json