
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([ Navigation, Pagination, Autoplay ]);



const Slide = () => {
    
    return ( 
        
        <Swiper
        navigation
        pagination
        autoplay={{delay: 4000, disableOnInteraction: false}}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="/img-main-euro.jpg" className="h-screen w-screen object-cover"/></SwiperSlide>
            <SwiperSlide><img src="/img-main-patagonia.jpg" className="h-screen w-screen object-cover"/></SwiperSlide>
            <SwiperSlide><img src="/img-section-main-termos.jpg" className="h-screen w-screen object-cover"/></SwiperSlide>
            <SwiperSlide><img src="/img-section-main-termos-eco.jpg" className="h-screen w-screen object-cover"/></SwiperSlide>
            {/* <SwiperSlide><img src="/img-main-patagonia.jpg"/></SwiperSlide> */}
        </Swiper>
    );
}
 
export default Slide;