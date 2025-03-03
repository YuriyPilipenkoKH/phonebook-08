import {  MobileWrap, StyledHeader,  Wrap } from './AppBar.styled';
import Navigation from '../navigation/Navigation';
import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../authnav/AuthNav';
import ThemeChanger from '../button/ThemeChanger';
import LangChanger from '../button/LangChanger';
import UserMenu from '../usermenu/UserMenu';
import MobileMenu from '../mobilemenu/MobileMenu';
import { HeaderWrap } from '../mobilemenu/MobileMenu.styled';


const AppBar = () => {
  const {  token, user} = useAuth()

  return (
    <StyledHeader >
      <Navigation />
      <HeaderWrap>
        <Wrap className='TL_center'>
          <LangChanger/>
          <ThemeChanger/>
        </Wrap>
          {token ? <UserMenu /> : <AuthNav />}
      </HeaderWrap>

      <MobileWrap className='MobileWrap'>
        {token && (
      <div className='avatar__wrapp-sm'>
          <img
          src={user?.image}
          alt="Profile image"
          className="userimage"
          />
          </div>
        )}
        <MobileMenu/>
      </MobileWrap>
    </StyledHeader>
  );
};

export default AppBar