
import styled from 'styled-components';

export const ParentFooter = styled.div`
    height: auto;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    /* position: absolute;
    bottom: 0; */
    padding: 15px 20px;
`
export const FooterTItle = styled.div` 
    height: auto;
    width: 100%;
    display: flex;
    font-size: 2rem;
    color: white;
    justify-content: center;
    margin-bottom: 15px;
`

export const FooterBox = styled.div` 
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const FooterIcons = styled.div` 
    height: auto;
    width: 30%;
    display: flex;
    padding: 10px 20px;
    justify-content: space-evenly;

    @media (max-width: 1440px) {
    width: 50%;
}

    @media (max-width: 1024x) {
    width: 80%;
}
    
    @media (max-width: 768x) {
    width: 100%;
}

    @media (max-width: 425px) {
    width: 80%;
}
`

export const FooterNavIcons = styled.a`
    height: auto;
    width: 10%;
    text-decoration: none;
    margin-left: 20px;
    cursor: pointer;
    color: white;

    @media (max-width: 1440px) {
    width: 7%;
}

    @media (max-width: 1024px) {
    width: 7%;
}

    @media (max-width: 768px) {
    width: 10%;
}

    @media (max-width: 425px) {
    width: 15%;
}
`