
import { CgMenuGridR } from "react-icons/cg";
import { Button, FlatButton } from '../button/Button';
import {  MenuList, MenuWrap } from "./MobileMenu.styled";
import { useState } from "react";
import LangChanger from "../button/LangChanger";
import ThemeChanger from "../button/ThemeChanger";

import { useAuth } from "../../hooks/useAuth";
import { StyledLink } from "../layout/Layout.styled";
import { useLanguage } from "../../hooks/useLanguage";


const MobileMenu = () => {
   const {  token, } = useAuth()
  const [open, setOpen] = useState<boolean>(false)
    const lang = useLanguage()
  const click = () => setOpen(!open) 

  return (
    <>
      <MenuWrap className="MenuWrap">
        <FlatButton onClick={click} className="menu_btn">
          <CgMenuGridR size={25} />
        </FlatButton>
      </MenuWrap>
      <MenuList className={ open ? 'open' : ''}>
      {!token &&         (
        <StyledLink  to="/login" onClick={click}>
          {lang.logBtn}
          </StyledLink>
            )}
          <LangChanger/>
          <ThemeChanger/>

        <Button
        type="button" 
        onClick={click}
        className="close" >Back</Button>
      </MenuList>
    </>
  )
}

export default MobileMenu