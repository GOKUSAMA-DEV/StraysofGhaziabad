
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
    width: 20%;
    display: flex;
    justify-content: space-around;
`

export const FooterNavIcons = styled.li`
    height: auto;
    width: 10%;
    list-style-type: none;
    cursor: pointer;
    color: white;
`