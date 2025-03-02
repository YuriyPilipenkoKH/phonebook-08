import {  StyledHeader,  Wrap } from './AppBar.styled';
import Navigation from '../navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../authnav/AuthNav';
import ThemeChanger from '../button/ThemeChanger';
import LangChanger from '../button/LangChanger';
import UserMenu from '../usermenu/UserMenu';
import MobileMenu from '../mobilemenu/MobileMenu';


const AppBar = () => {
  const {  token, } = useAuth()

  return (
    <StyledHeader >
      <Navigation />
      <Wrap className='TL_center'>
        <LangChanger/>
        <ThemeChanger/>
      </Wrap>
        {token ? <UserMenu /> : <AuthNav />}
        <MobileMenu/>
    </StyledHeader>
  );
};

export default AppBar