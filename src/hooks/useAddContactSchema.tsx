import { useEffect, useState } from 'react';
import { contactSchema } from '../types/contact.model';

import { useSelector } from 'react-redux';

import { z } from 'zod';
import { zodLangEn, zodLangUa } from '../lang/zodLang';
import { getLang } from '../redux/lang/selectors';

export const useAddContactSchema = () => {
  const [lang, setLang] = useState(zodLangEn); 
  const language = useSelector(getLang);

  useEffect(() => {
    setLang(language === 'english' ? zodLangEn : zodLangUa);
  }, [language]);

  // Create schema dynamically
  const addContactSchema = contactSchema(lang).pick({
    name: true,
    number: true,
  });

  return { addContactSchema };
};

// Type for use in react-hook-form
export type AddContactSchemaType = z.infer<ReturnType<typeof useAddContactSchema>['addContactSchema']>;
