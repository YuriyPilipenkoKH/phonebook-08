import styled  from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Spinner from '../../img/icons/Spinner';



const rotate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`


export const StyledSpinner = styled(Spinner)`
  /* animation: ${rotate} 2s linear infinite; */
`;

export const Wrap= styled.div`
   position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    fill: var(--react-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`