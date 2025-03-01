import  { useEffect, useState } from 'react'
import { zodLangEn, zodLangUa } from '../lang/zodLang';
import { useSelector } from 'react-redux';
import { userSchema } from '../types/user.model';
import { z } from 'zod';
import { getLang } from '../redux/lang/selectors';

export const useLoginSchema = () => {
  const [lang, setLang] = useState(zodLangEn); 
  const language = useSelector(getLang);

    useEffect(() => {
      setLang(language === 'english' ? zodLangEn : zodLangUa);
    }, [language]);

     const loginSchema =  userSchema(lang).pick({
      email: true,
      password: true,
    });

  return {loginSchema}
}

export type LoginSchemaType = z.infer<ReturnType<typeof useLoginSchema>['loginSchema']>;

