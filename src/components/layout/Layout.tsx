import { Suspense } from 'react'
import { MainFooter, MainHeader } from './Layout.styled'
import { Outlet } from 'react-router-dom'





const Layout = () => {
//   const lang = useLanguage()
//     const dispatch = useAppDispatch();
    
// const quit =() => {
//   dispatch(logOut( 'Dude'))
// }
    return (
    <>
      <MainHeader  className="main-header" >
        {/* <AppBar/> */} header there
      </MainHeader>
        <Suspense >
            <Outlet />
        </Suspense>
        <MainFooter >
          {/* {lang.footerTitle}  */}
          {/* <button 
          className='quit'
          type='button' 
          onClick={quit}>—</button>
          {'2025'} */}
          {/* < MirrorStreamIcon /> */}
          shocker there
        </MainFooter>
      </>
    )}

export default Layout