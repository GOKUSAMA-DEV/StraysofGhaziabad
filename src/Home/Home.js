import React from 'react'
import {
    HomeParent,
    HomeBanner,
    HomeBannerImg,
    OurService,
    OurTitleCon,
    OurTitle,
    OurViewCon,
    OurView,
    ServiceBox,
    ServiceCard,
    OurHows,
    OurBox,
    OurHowsTitle,
    ServiceCardIimg,
    OurBoxes,
    OurBoxedCard,
    OurBoxedCardTitle,
    OurBoxedCardDesc
} from "./HomeELements"
import { Link } from "react-router-dom";

import aa from "../Assets/IMG-20211218-WA0005.jpg";
import bb from "../Assets/IMG-20211213-WA0045.jpg";
import cc from "../Assets/IMG-20211220-WA0015.jpg";
import dd from "../Assets/IMG_20211219_084007.jpg";
import ee from "../Assets/IMG_20210717_185709.jpg";
import bannerImage from "../Assets/IMG_20211212_152226.jpg";

const Home = () => {

    return (
        <>
            <HomeParent>
                <HomeBanner>
                    <HomeBannerImg src={bannerImage} />
                </HomeBanner>
                <OurService>
                    <OurBox>
                        <OurTitleCon>
                            <OurTitle>Our Services</OurTitle>
                        </OurTitleCon>
                        <OurViewCon>
                            <OurView>
                                <Link to="/StraysofGhaziabad/gallery">View More</Link>
                            </OurView>
                        </OurViewCon>
                    </OurBox>
                    <ServiceBox>
                        <ServiceCard>
                            <ServiceCardIimg src={aa} />
                        </ServiceCard>
                        <ServiceCard>
                            <ServiceCardIimg src={bb} />
                        </ServiceCard>
                        <ServiceCard>
                            <ServiceCardIimg src={cc} />
                        </ServiceCard>
                        <ServiceCard>
                            <ServiceCardIimg src={dd} />
                        </ServiceCard>
                        <ServiceCard>
                            <ServiceCardIimg src={ee} />
                        </ServiceCard>
                    </ServiceBox>
                </OurService>
                <OurHows>
                    <OurHowsTitle>How it Works</OurHowsTitle>
                    <OurBoxes>
                        <OurBoxedCard>
                            <OurBoxedCardTitle>Who We Are</OurBoxedCardTitle>
                            <OurBoxedCardDesc>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </OurBoxedCardDesc>
                        </OurBoxedCard>
                        <OurBoxedCard>
                            <OurBoxedCardTitle>Who We Are</OurBoxedCardTitle>
                            <OurBoxedCardDesc>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </OurBoxedCardDesc>
                        </OurBoxedCard>
                        <OurBoxedCard>
                            <OurBoxedCardTitle>Who We Are</OurBoxedCardTitle>
                            <OurBoxedCardDesc>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </OurBoxedCardDesc>
                        </OurBoxedCard>
                        <OurBoxedCard>
                            <OurBoxedCardTitle>Who We Are</OurBoxedCardTitle>
                            <OurBoxedCardDesc>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                            </OurBoxedCardDesc>
                        </OurBoxedCard>
                        
                    </OurBoxes>
                </OurHows>
            </HomeParent>
        </>
    )
}

export default Home
