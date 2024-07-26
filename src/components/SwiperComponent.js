import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';// Убедитесь, что путь верный

const SwiperComponent = ({ products }) => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        loop = {true}
      >
        {products.map((product) => (
          <SwiperSlide className="">
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              link={product.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
