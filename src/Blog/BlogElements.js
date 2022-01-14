import styled from "styled-components"

export const OurBoxes = styled.div`
    height: auto;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto; 
    grid-gap: 10px 20px;
    margin-bottom: 2rem;

    @media (max-width: 425px) {
     display: flex;
     flex-direction: column;
    }
`

export const OurBoxedCard = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
    /* background-color: lightseagreen; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    border-radius: 5px;
    box-shadow:  15px 10px 27px grey;

    &:hover{
        
    }
`
export const OurImageContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
`
export const OurImage = styled.img`
    height: auto;
    width: 65%;
    object-fit: cover;
    border-radius: 5px;
`

export const OurBoxedCardTitle = styled.div`
    height: auto;
    width: 100%;
    padding: 10px 0;
    /* justify-content: center; */
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

export const OurBoxedCardDesc = styled.div`
    height: auto;
    width: 100%;
    text-align: center;
    justify-content: center;
    font-size: 1.1rem;
`