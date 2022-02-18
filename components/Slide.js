
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import "swiper/components/pagination/pagination.min.css"
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([ Navigation, Pagination, Autoplay ]);



const Slide = () => {
    
    return ( 
        
        <Swiper
            navigation
            pagination={true}
            autoplay={{delay: 4000, disableOnInteraction: false}}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="/img-main-patagonia.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide><img src="/img-main-euro.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide><img src="/img-section-main-termos.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
            <SwiperSlide><img src="/img-section-main-termos-eco.jpg" className="md:h-screen w-screen object-cover md:mt-26"/></SwiperSlide>
        </Swiper>
    );
}
 
export default Slide;