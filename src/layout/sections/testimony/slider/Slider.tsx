import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


type SliderPropsType = {
    slides: {
        description: string;
        icon: string;
        name: string;
        job: string;
    }[];
}

export const Slider: React.FC<SliderPropsType> = ({slides}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            className={"mySwiper"}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            {slides.map((slide) => (
                <SwiperSlide >
                    <SwiperDescription>{slide.description}</SwiperDescription>
                    <FlexWrapper justify="center">
                        <SwiperImage src={slide.icon}></SwiperImage>
                    </FlexWrapper>
                    <FlexWrapper direction="column" align="center">
                        <SwiperName>{slide.name}</SwiperName>
                        <SwiperJob>{slide.job}</SwiperJob>
                    </FlexWrapper>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

const SwiperDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    text-align: center;
    color: ${theme.colors.primaryBg};
`

const SwiperImage = styled.img`
    width: 66px;
    height: 66px;
    border-radius: 50%;
    object-fit: cover;
    margin: 30px 0;
    filter: grayscale(100%);
`

const SwiperName = styled.span`
    text-transform: capitalize;
    color: ${theme.colors.primaryBg};
    margin-bottom: 5px;
`

const SwiperJob = styled.span`
    color: ${theme.colors.primaryBg};
    text-transform: uppercase;
`
