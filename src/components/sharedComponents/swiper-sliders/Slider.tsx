import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/pagination';
import './myStylesSlider.scss';

import { Thumbs, Pagination } from 'swiper/modules';
import {useAppSelector} from "../../hooks/redux";
export const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {currentBookData} = useAppSelector(state => state.apiRequestReducer);
    const setImgParams = (classname:string) => {
        return <img className={classname}
                    src={(currentBookData.images) ? currentBookData.images[0].url : null}
                    alt="book image"/>
    }

    return (
            <div className='wrapper-slider'>
                <Swiper
                    loop={true}
                    spaceBetween={50}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Thumbs, Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                            1110: {
                                pagination: {enabled:false}
                            },
                            768: {
                                pagination: {enabled:true}
                            },
                            320: {
                                pagination: {enabled:true}
                            }}}>
                    <SwiperSlide>
                        {setImgParams('img-main-slider')}
                    </SwiperSlide>
                    <SwiperSlide>
                        {setImgParams('img-main-slider')}
                    </SwiperSlide>
                    <SwiperSlide>
                        {setImgParams('img-main-slider')}
                    </SwiperSlide>
                    <SwiperSlide>
                        {setImgParams('img-main-slider')}
                    </SwiperSlide>
                    <SwiperSlide>
                        {setImgParams('img-main-slider')}
                    </SwiperSlide>
                </Swiper>
                <div className='horizontal-slider-wrapper'>
                    <Swiper
                        centerInsufficientSlides={true}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        modules={[Thumbs]}>
                        <SwiperSlide>
                            {setImgParams('img-horizontal-slider')}
                        </SwiperSlide>
                        <SwiperSlide>
                           {setImgParams('img-horizontal-slider')}
                        </SwiperSlide>
                        <SwiperSlide>
                            {setImgParams('img-horizontal-slider')}
                        </SwiperSlide>
                        <SwiperSlide>
                            {setImgParams('img-horizontal-slider')}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    );
}