import styled from '@emotion/styled';

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

		justify-content: space-between;
		gap: 20px;

`

export const ThemeBtn = styled.button`
   /* margin-left: auto; */
 
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
 
    

    &> svg {
        transition:  fill 0.5s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition:  fill 0.5s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
`

export const LangBtn = styled.button`
    margin-left: auto;
    width: 50px;   
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    color: var(--text-color) ;
    font-weight: 600;
    

    &> svg {
        transition:  fill 0.5s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;


    &> svg {
        transition:  fill 0.5s ease-in-out;
        fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
    }
    }
`

export const Wrap = styled.div`
  display: flex;
	gap: 8px;
    @media screen and (max-width: 767px) {
    display: none;
        }
`
export const MobileWrap = styled.div`
  display: flex;
	gap: 32px;
    @media screen and (min-width: 768px) {
    display: none;
	}
	
	&>a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	padding: 8px;
	font-weight: 600;
	border-radius: 50%; 
	border: none;
	background-color: transparent;
	transition: all 0.4s ease-in-out; 
	&:hover {
	background-color: #5983679b;
	}

    }

`