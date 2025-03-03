
import { CgMenuGridR } from "react-icons/cg";
import { Button, FlatButton } from '../button/Button';
import {  MenuList, MenuWrap } from "./MobileMenu.styled";
import { useState } from "react";
import LangChanger from "../button/LangChanger";
import ThemeChanger from "../button/ThemeChanger";

import { useAuth } from "../../hooks/useAuth";
import { StyledLink } from "../layout/Layout.styled";
import { useLanguage } from "../../hooks/useLanguage";
import { MenuItem } from "../usermenu/UserMenu.styled";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { AuthResponse, logOut } from "../../redux/auth/operations";
import { Notify } from "notiflix";
import capitalize from "../../lib/capitalize";


const MobileMenu = () => {
  const lang = useLanguage()
  const {  token, user} = useAuth()
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false)

  const click = () => setOpen(!open) 
  const quit =() => {
    setOpen(!open)
    dispatch(logOut(user?.name || 'Dude'))
    .then((res) => {
     if(res.type === 'auth/logout/fulfilled' && (res.payload as AuthResponse).success){
        Notify.success(`${lang.bye}, ${capitalize(user?.name)}`)
     }
    })
 }

  return (
    <>
      <MenuWrap className="MenuWrap">
        <FlatButton onClick={click} className="menu_btn">
          <CgMenuGridR size={25} />
        </FlatButton>
      </MenuWrap>
      <MenuList className={ open ? 'open' : ''}>
      {!token ?         (
        <StyledLink  to="/login" onClick={click}>
          {lang.logBtn}
        </StyledLink>
        )  : (
        <MenuItem type='button' onClick={quit}>
          {lang.out}
        </MenuItem>
        )}

          <LangChanger styles="MenuItemStyles"/>
          <ThemeChanger styles="MenuItemStyles"/>
        <MenuItem
        type="button" 
        onClick={click}
        className="" >
          Back
        </MenuItem>
      </MenuList>
    </>
  )
}

export default MobileMenu