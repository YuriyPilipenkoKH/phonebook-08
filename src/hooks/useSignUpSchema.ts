import  { useEffect, useState } from 'react'
import { zodLangEn, zodLangUa } from '../lang/zodLang';
import { useSelector } from 'react-redux';
import { userSchema } from '../types/user.model';
import { z } from 'zod';
import { getLang } from '../redux/lang/selectors';

export const useSignUpSchema = () => {
  const [lang, setLang] = useState(zodLangEn); 
  const language = useSelector(getLang);

    useEffect(() => {
      setLang(language === 'english' ? zodLangEn : zodLangUa);
    }, [language]);

     const signUpSchema =  userSchema(lang).pick({
      name: true,
      email: true,
      password: true,
    });

    return { signUpSchema };
}
export type SignUpSchemaType = z.infer<ReturnType<typeof useSignUpSchema>['signUpSchema']>;