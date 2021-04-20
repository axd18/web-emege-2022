// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import styles from '../Swiper.module.scss'

// Import Swiper styles
// import 'swiper/swiper.scss';


const Slide = () => {
    
    return ( 
        <div className={styles}>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
        </Swiper>
        </div>
     );
}
 
export default Slide;