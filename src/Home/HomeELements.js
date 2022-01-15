import styled from "styled-components";

export const HomeParent = styled.div`
    height: auto;
    width: 100%;
    background-color: lightgoldenrodyellow;
    display: flex;
    flex-direction: column;
`

export const HomeBanner = styled.div`
    height: auto;
    width: 100%;
    /* padding: 5px 10px; */
`
export const HomeBannerImg = styled.img`
    height: 500px;
    object-fit: cover;
    width: 100%;
`



export const OurService = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    
`
export const OurBox = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;

    @media (max-width: 425px) {
        width: 100%;
        flex-direction: column;
  }

`

export const OurTitleCon = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
`

export const OurTitle = styled.p`
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
`

export const OurViewCon = styled.div`
    height: 10%;
    width: 7%;

    @media (max-width: 425px) {
        width: 20%;
    }
`

export const OurView = styled.li`
    color: black;
    font-size: 0.8rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 8px;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    list-style-type: none;

    
`

export const ServiceBox = styled.div`
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto auto; 
    grid-gap: 10px 20px;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
       display: grid;
        grid-template-columns: auto auto;
    grid-gap: 10px 20px;

    }

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
`

export const ServiceCard = styled.div`
    height: auto;
    width: 100%;
    margin: auto;
    background-color: linen;
    padding: 0 10px;
    border-radius: 5px;
    box-shadow:  15px 10px 27px grey;
`

export const ServiceCardIimg = styled.img`
    height: 400px;
    width: 100%;
`


export const OurHows = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`

export const OurHowsTitle = styled.p`
    font-size: 2.3rem;
    text-align: center;
`
export const OurBoxes = styled.div`
    height: auto;
    width: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: auto auto auto auto; 
    grid-gap: 0px 20px;
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
    background-color: lightseagreen;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`
export const OurBoxedCardTitle = styled.div`
    height: auto;
    width: 100%;
    justify-content: left;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`

export const OurBoxedCardDesc = styled.div`
    height: auto;
    width: 100%;
    justify-content: left;
    font-size: 1.1rem;
`