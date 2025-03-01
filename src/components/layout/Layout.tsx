import { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'
import MainModal from '../modals/MainModal'
import { useAll } from '../../hooks/useAll'
import { useLanguage } from '../../hooks/useLanguage'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { logOut } from '../../redux/auth/operations'
import AppBar from '../appbar/AppBar'
import MirrorStreamIcon from '../../img/icons/mirrorStream'



const Layout = () => {
  const {  modalIsOpen , selectedContact } = useAll()
  const lang = useLanguage()
    const dispatch = useAppDispatch();
    
const quit =() => {
  dispatch(logOut( 'Dude'))
}

    return (
    <>
      <MainHeader  className="main-header" >
        <AppBar/> 

      </MainHeader>
        <Suspense >
            <Outlet />
        </Suspense>
        <MainFooter >
          {lang.footerTitle} 
     <button 
          className='quit'
          type='button' 
          onClick={quit}>—</button>
          {'2025'} 
          < MirrorStreamIcon />

        </MainFooter>

    { modalIsOpen && selectedContact && (
      <MainModal contact={selectedContact}/>
      ) }
      </>
    )}

export default Layout