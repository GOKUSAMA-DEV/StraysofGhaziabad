import styled from 'styled-components';
import { Link as Linko} from 'react-router-dom';

export const HeaderBox = styled.div`
    height: auto;
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const HeaderBoxLogo = styled.div`
    height: auto;
    /* background-color: lightcyan; */
    width: 10%;
    padding: 1rem 0;
    
    display: flex;
    justify-content: center;
    @media (max-width: 425px) {
        width: 50%;
        padding: 10px 20px;
  }
`

export const HeadingLogo = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
`

export const HeaderBoxNav = styled.div`
    height: auto;
    width: 30%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 425px) {
        width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

}
`

export const HeaderNavLink = styled.li`
    color: white;
    font-size: 1.3rem;
    padding: 5px 10px;
    cursor: pointer;
    list-style-type: none;

    @media (max-width: 425px) {
        width: 100%;
        text-align: center;
  }
`