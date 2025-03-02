
import { CgMenuGridR } from "react-icons/cg";
import { FlatButton } from '../button/Button';
import { MenuWrap } from "./MobileMenu.styled";

const MobileMenu = () => {

  return (
    <MenuWrap>
      <FlatButton >
        <CgMenuGridR size={25} />
      </FlatButton>
    </MenuWrap>
  )
}

export default MobileMenu