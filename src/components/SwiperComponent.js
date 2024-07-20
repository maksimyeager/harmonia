import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';// Убедитесь, что путь верный

const SwiperComponent = ({ products }) => {
  return (
    <div className="swiper-container p-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
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
