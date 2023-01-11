import React from "react";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {TransformedObject} from "../../../../core/hooks/useDate";
import {WeatherCardView} from "../../../Simple/WeatherCardView";

import 'swiper/scss';
import 'swiper/scss/pagination'
import "./slider.scss"

interface IProps {
    daysInfo: TransformedObject[]
}

export const Slider: React.FC<IProps> = ({daysInfo}) => {
    return(
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {daysInfo.map(day => (
                <SwiperSlide>
                    <div className="days-weather-info days-weather-info_fixed">
                        <WeatherCardView dayInfo={day} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}