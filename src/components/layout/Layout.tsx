import { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import ThemeChanger from '../button/ThemeChanger'
import LangChanger from '../button/LangChanger'
import MainModal from '../modals/MainModal'
import { useAll } from '../../hooks/useAll'
import { useLanguage } from '../../hooks/useLanguage'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { onModalOpen } from '../../redux/modal/modalSlice'
import { fakeContact } from '../../data/contact'




const Layout = () => {
  const {  modalIsOpen , selectedContact } = useAll()
  const lang = useLanguage()
    const dispatch = useAppDispatch();
    
// const quit =() => {
//   dispatch(logOut( 'Dude'))
// }
const click = () => {
  dispatch(onModalOpen(fakeContact))
  
}
    return (
    <>
      <MainHeader  className="main-header" >
        {/* <AppBar/> */} <p>header there</p>
        <ThemeChanger/>
        <LangChanger/>
        <button type='button' onClick={click}>Mo</button>
      </MainHeader>
        <Suspense >
            <Outlet />
        </Suspense>
        <MainFooter >
          {lang.footerTitle} 
          {/* <button 
          className='quit'
          type='button' 
          onClick={quit}>—</button>
          {'2025'} */}
          {/* < MirrorStreamIcon /> */}

        </MainFooter>

    { modalIsOpen && selectedContact && (
      <MainModal contact={selectedContact}/>
      ) }
      </>
    )}

export default Layout