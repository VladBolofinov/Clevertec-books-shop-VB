import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/thumbs';
import 'swiper/scss/pagination';
import './myStylesSlider.scss';

import { Thumbs, Pagination } from 'swiper/modules';
import bookPhotoBig from "../../assets/img/pictures/BookPhotoBig.png";
const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                        <img className='img-main-slider' src={bookPhotoBig} alt="book image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-main-slider' src={bookPhotoBig} alt="book image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-main-slider' src={bookPhotoBig} alt="book image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-main-slider' src={bookPhotoBig} alt="book image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-main-slider' src={bookPhotoBig} alt="book image"/>
                    </SwiperSlide>
                </Swiper>
                <div className='horizontal-slider-wrapper'>
                    <Swiper
                        centerInsufficientSlides={true}
                        onSwiper={setThumbsSwiper}
                        slidesPerView={4}
                        modules={[Thumbs]}>
                        <SwiperSlide>
                            <img className='img-horizontal-slider' src={bookPhotoBig} alt="book image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img-horizontal-slider' src={bookPhotoBig} alt="book image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img-horizontal-slider' src={bookPhotoBig} alt="book image"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img-horizontal-slider' src={bookPhotoBig} alt="book image"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    );
}
export default Slider;