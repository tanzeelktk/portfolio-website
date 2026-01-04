import { useEffect, useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
function HeroSection(props) {

    const bannerImages = [
        '/images/banner/blogforgeCover.webp',
        '/images/banner/gleamerCover.webp',
        '/images/banner/learnaxisCover.webp',
        '/images/banner/studiovaCover.webp'
    ];


    return (
        <div className="flex flex-col gap-4 md:flex-row items-center p-20 justify-around dark:bg-[#081738] pt-50">
            <div className="">
                <h1 className="text-5xl font-bold mb-4 text-[#102D47] dark:text-white">Hello! I am Tanzeel. <br /> Welcome to My Portfolio</h1>
                <p className="text-xl mb-8 text-[#102D47] dark:text-white">Showcasing my projects and skills</p>
                <div className='flex items-center justify-center gap-4'>
                    <button href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded hover:cursor-pointer
                    hover:bg-transparent hover:text-blue-600 border border-blue-600 transition-colors 
                    duration-200 text-sm font-semibold ">Explore</button>
                    <button href="#projects" className="px-8 py-3 text-blue-600 rounded hover:cursor-pointer
                     hover:bg-blue-600 border border-blue-600 hover:text-white transition-colors duration-200 text-sm font-semibold">Create</button>
                </div>

            </div>
            <div className="flex flex-col items-center justify-center relative gap-4">
                <div className="w-[320px] h-[220px] md:w-[420px] md:h-[280px] rounded-xl overflow-hidden">

                    <Swiper
                        className="w-full h-full"
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop={true}
                        speed={700}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                    >
                        {
                            bannerImages.map((img, index) => {
                                return (
                                    <SwiperSlide className="w-full h-full" key={index}>
                                        <div className="w-full h-full">
                                             <img
                                            src={img}
                                            className="w-full h-full object-cover"
                                            alt=""
                                        />
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;