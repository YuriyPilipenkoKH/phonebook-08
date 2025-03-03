import styled from '@emotion/styled';

export const Menu = styled.div`
  position: relative;
`

export const MenuWrap = styled.div`
  display: block;

		&>svg {
		fill: var(--text-color);
		}

  @media screen and (min-width: 768px) {
    display: none;
    }
    
`
export const HeaderWrap = styled.div`
    display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    }
`
export const MenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%;
  height: 100vh;
  width: 100%;
  background-color: var(--background-color);
  z-index: 10;
  opacity: 0;
  transition: 1s ease-in-out;

  &.open {
    left: 0;
    opacity: 1;
  }
  &>.close{
    height: 16px;
   
  }
`