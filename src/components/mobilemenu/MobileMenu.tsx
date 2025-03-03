
import { CgMenuGridR } from "react-icons/cg";
import { FlatButton } from '../button/Button';
import {  MenuList, MenuWrap } from "./MobileMenu.styled";
import { useState } from "react";
import LangChanger from "../button/LangChanger";
import ThemeChanger from "../button/ThemeChanger";


const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false)
  const click = () => setOpen(!open) 

  return (
    <>
      <MenuWrap>
        <FlatButton onClick={click}>
          <CgMenuGridR size={25} />
        </FlatButton>
      </MenuWrap>
      <MenuList className={ open ? 'open' : ''}>
        <button
        type="button" 
        onClick={click}
        className="close" >back</button>

          <LangChanger/>
          <ThemeChanger/>

      </MenuList>
    </>
  )
}

export default MobileMenu