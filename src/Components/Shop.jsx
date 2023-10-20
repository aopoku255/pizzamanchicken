
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img6 from '../assets/andas/Beef-Bucket-1.jpg'
import img9 from '../assets/andas/friedrice-5.jpg'

import { Modal } from 'reactstrap';
import './shop.css'
import { AiOutlineClose } from 'react-icons/ai';


const Shop = () => {
  const [Ismodal, setIsModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const shopImg = [
    { id: 1, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821825/pizzaman%20website/andas/wings_ulptys.jpg', title: 'Chicken Wings', description: 'Spicy Chicken Wings' },
    { id: 2, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821824/pizzaman%20website/andas/pizza_lgbfqa.jpg', title: 'Pizzaman Special', description: 'Perfection And Served' },
    { id: 3, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821823/pizzaman%20website/andas/friedRice-3_vtbboh.jpg', title: 'Fried Rice', description: 'Tasty Fried Rice' },
    { id: 12, image: img6, title: 'Beef Bucket', description: 'Crispy Delight' },
    { id: 4, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821823/pizzaman%20website/andas/noodle-2_aeedeb.jpg', title: 'Noodles', description: 'Great Taste' },

    { id: 6, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821823/pizzaman%20website/andas/jollof-1_sjsplh.jpg', title: 'Jollof + 3pcs Wings', description: 'Flavorful Combo' },
    { id: 8, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821823/pizzaman%20website/andas/friedrice-4_tzgo4z.jpg', title: 'Chickenman FriedRice', description: 'Irresistible Flavor' },
    { id: 9, image: img9, title: 'FriedRice + 1 Drum', description: 'A Perfect Pair' },
    { id: 10, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821825/pizzaman%20website/andas/wings2_akiqt0.jpg', title: 'Drums 8Pcs', description: 'Flavorful Drumstick Delight' },
    { id: 11, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821825/pizzaman%20website/andas/wings-bucket_a4dxch.jpg', title: 'Drums 12pcs', description: 'A Drumstick Feast!' },
    { id: 13, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821824/pizzaman%20website/andas/jollof-2_yomvka.jpg', title: 'Jollof Mini Bucket + Drums', description: 'Flavorful Combo' },

    { id: 15, image: 'https://res.cloudinary.com/dmtukjeoa/image/upload/v1697821823/pizzaman%20website/andas/jollof-1_sjsplh.jpg', title: 'Jollof Mini Bucket + Drums', description: 'A Flavorful Feast' },
  ];

  const toggle = (image) => {
    setIsModal(!Ismodal);
    setSelectedImage(image);
  };

  const handleCloseBtn = () => {
    setIsModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="mt-10 md:h-[rem]">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        {shopImg.map((shop) => (
          <SwiperSlide key={shop.id}>
            <div className={`group cursor-pointer transform transition-transform hover:scale-95   ${shop.id}`}  onClick={() => toggle(shop.image)}>
              <Link to="" className=''>
               <div className='lg:w-[19rem] lg:h-[19rem] md:w-[16rem] md:h-[18rem] w-[28rem] h-[19rem]'
               style={{
                backgroundImage: `url(${shop.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              
               >

               </div>
              </Link>
              <div className="bg-black opacity-30 absolute inset-0 rounded-2xl"></div>
              <div className="absolute w-full text-white text-center opacity-0 bottom-0 lg:group-hover:bottom-20 md:group-hover:bottom-20 group-hover:bottom-40 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-2xl font-bold">{shop.title}</h4>
                <span className="text-md">{shop.description}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={Ismodal} toggle={toggle} className="modal">
        <div className="absolute top-[20px] md:right-[60px] right-[30px] cursor-pointer">
          <AiOutlineClose color="#fff" onClick={handleCloseBtn} size={40} />
        </div>
        {selectedImage && (
          <img
            src={selectedImage}
            className="md:h-[35rem] md:w-84 text-center w-[50rem]  object-cover rounded-sm"
          />
        )}
      </Modal>

      <div className="bg-primary md:relative md:h-[10rem] w-full md:flex md:flex-row md:items-center md:px-8 md:justify-between mt-10 md:pt-4 py-14 px-6">
        <div className="flex flex-col md:mt-10">
          <h3 className="text-white font-bold md:text-3xl text-2xl">We Speak The Good Food Language</h3>
          <span className="text-white text-lg">Find your nearest restaurant</span>
        </div>
        <div className="mt-8 ">
          <Link
            to="/our-branches"
            className="text-center text-black lg:px-10 md:px-3 py-3 px-4 bg-white rounded-sm transition-all duration-400 hover:bg-black hover:text-white"
          >
            Shops Near Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
