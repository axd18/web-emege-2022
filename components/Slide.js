// Import Swiper React components
import { Swiper, SwiperSlide, Autoplay} from 'swiper/react';
import styles from '../Swiper.module.scss'

// Import Swiper styles
// import 'swiper/swiper.scss';


const Slide = () => {
    
    return ( 
        <div className={styles}>
        <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide><img src="/img-main-euro.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/img-main-patagonia.jpg"/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        </div>
     );
}
 
export default Slide;