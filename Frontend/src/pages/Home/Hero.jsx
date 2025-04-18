import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import { DataInfo } from './DataInfo';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';


const Hero = () => {
    const swiperData = [
        {
          id: 1,
          bgImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
          slogan: "Keep your body",
          title: "Burning",
          desc: "Get ready to burn off some serious fat with our high quality products.",
        },
        {
          id: 2,
          bgImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
          slogan: "Just Believe In",
          title: "Yourself",
          desc: "We are here to help you achieve your goals.",
        },
        {
          id: 3,
          bgImg: "https://images.unsplash.com/photo-1554284126-aa88f22d8b54",
          slogan: "Grow Your Body",
          title: "Strength",
          desc: "Make your body stronger with our high quality products.",
        },
      ];

  return (
    <HeroComponent swiperData={swiperData} />
  );
}

const HeroComponent = ({ swiperData }) => {
  const navigate = useNavigate();
  return (
    <>
        <div className='w-full h-auto'>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper w-full h-auto"
            >
                {swiperData.map((data) => (
                    <SwiperSlide 
                    key ={data.id}
                    className='w-full h-[70vh] relative' 
                    style={{
                    backgroundImage: `url(${data.bgImg})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat",
                    }}
                    >
    
                        <div className='w-full h-full bg-black/80 absolute top-0 left-0 -z-10'></div>
                        <div className='w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4'>
                            <h5 className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase'>
                                {data.slogan}
                            </h5>
                            <h1 className='lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold text-white mb-4 uppercase'>
                                {data.title}
                            </h1>
                            <p className='lg:text-lg md:text-base sm:text-base text-base font-medium text-gray-500 mb-6 text-center'>
                                {data.desc}
                            </p>
                            <PrimaryBtn 
                              className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] h-14 mt-5 text-xl font-semibold rounded-full"
                              onClick={() => {
                                navigate('/login', { state: { showRegister: true } });
                              }}
                            >
                              Get started
                            </PrimaryBtn>
                        </div>
                    </SwiperSlide>
                ))}      
            </Swiper>
           { /* banner type card */}
        <div className='w-full h-auto flex items-center lg:justify-between md:justify-between sm:justify-center justify-center lg:gap-7 md:gap-7 sm:gap-5 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap'>
            <DataInfo data="12000+" text="Members" />
            <DataInfo data="120+" text="Expert trainers" />
            <DataInfo data="13+" text="Years of experience" />
            <DataInfo data="368+" text="GYMs" />
        </div>
        </div>
    </>
  )
}

export default Hero;