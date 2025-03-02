
import  { useEffect } from 'react'
import { ListWrap,  PhonebookWrapper } from './Pages.styled'
import { useLanguage } from '../hooks/useLanguage'
import { useSelector } from 'react-redux'

import Section from '../components/section/Section'
import { useContacts } from '../hooks/useContacts'
import ContactList from '../components/phonebook/contactslist/ContactList'
import IconMphone from '../img/icons/iconMphone'
import { fetchContacts } from '../redux/contacts/operations'
import { useAppDispatch } from '../hooks/useAppDispatch'
import ContactForm from '../components/forms/ContactForm'
import PaginationControls from '../components/pagination/PaginationControls'
import GenerateRandomContact from '../components/generator/GenerateRandomContact'
import SearchBar from '../components/phonebook/searchbar/SearchBar'
import Message from '../components/phonebook/message/Message'
import { getLang } from '../redux/lang/selectors'
import Loader from '../components/loader/Loader'

const PhonebookPage = () => {
  const lang = useLanguage()

  const language = useSelector(getLang)
  const{contacts, currentPage, query, message, isLoading} = useContacts()
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContacts({ page: currentPage, }))
  }, [dispatch])
  console.log('query',query);
  
  return (
    <>
      <PhonebookWrapper className="phonebook__wrap">
      <Section title={lang.phonebook} icon ={language === 'english' &&  <IconMphone/>}>
        <ContactForm  />
        <SearchBar/>
        <GenerateRandomContact/>
        </Section >

        {/* <Filter /> */}
        
      {contacts.length > 0 ? (
        <ListWrap>
          <PaginationControls />
          <ContactList contacts ={contacts} />
        </ListWrap>
        ): (
          <>
          <Message text={message || ''}/>
          </>
        )  }
      </PhonebookWrapper>
      {isLoading && <Loader/>}
    </>
  )
}

export default PhonebookPage