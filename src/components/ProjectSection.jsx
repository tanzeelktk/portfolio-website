import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star, User, UserCircle, Wallet } from "lucide-react";
import Rating from "./Rating";

const ProjectSection = () => {

    const projectImages = [
        'awake.webp',
        'blogforge.webp',
        'gleamer.webp',
        'endeavor.webp',
        'homely.webp',
        'learnaxis.webp',
        'studiova.webp'
    ]

    const reviewsData = [
        { 
            name: "Daniel Reid", 
            role: "CEO, TechCorp", 
            image: 'daniel.webp',
            rating: 5,
            review: "WebCraftStudio transformed our online presence with a stunning website that perfectly captures our brand. Their team's expertise and dedication were evident throughout the project. Highly recommended!"
        },

        { 
            name: "Marcus Lee", 
            role: "Product Manager, InnovateX", 
            image: 'marcus.webp',
            rating: 4,
            review: "The team at WebCraftStudio exceeded our expectations in every way. From the initial concept to the final launch, their creativity and professionalism shone through. Our new website has received rave reviews from clients and partners alike." 
        },
        { 
            name: "Sophia Turner", 
            role: "Marketing Director, GrowthLab", 
            image: 'sophia.webp',
            rating: 5,
            review: "Working with WebCraftStudio was a game-changer for our business. They took the time to understand our goals and delivered a website that not only looks amazing but also drives results. Their attention to detail and commitment to quality is unmatched." 
        },
        { 
            name: "Marcus Lee", 
            role: "Product Manager, InnovateX", 
            image: 'marcus.webp',
            rating: 4,
            review: "The team at WebCraftStudio exceeded our expectations in every way. From the initial concept to the final launch, their creativity and professionalism shone through. Our new website has received rave reviews from clients and partners alike." 
        },
    ]


    return (
        <section id="projects">
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f5f5f5" />
                        <stop offset="25%" stopColor="#d9d9d9" />
                        <stop offset="50%" stopColor="#ffffff" />
                        <stop offset="75%" stopColor="#bfbfbf" />
                        <stop offset="100%" stopColor="#e6e6e6" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='bg-[#F5F9ff] dark:bg-[#000F30] py-12 '>

                <div className='flex flex-col gap-4'>
                    <p className='text-[#102D47] text-5xl font-bold dark:text-white'>Popular Projects</p>
                    <p className='text-[#102D47] text-xl dark:text-white'>Presenting Next-Generation Designs and Solutions. Create, <br /> Innovate, and Elevate.</p>
                </div>
                <div className='mx-20 mt-12'>
                    <Swiper
                        className="pb-20"
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        speed={700}
                        centeredSlides={false}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            300: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {projectImages.map((img, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='project-card' key={index}>
                                        <img className="rounded-xl" src={`/images/projects/${img}`} alt="" />
                                        <p className='text-xl mt-4'>Logo</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 m-20 justify-center p-6">
                <div className="flex flex-col md:flex-row gap-5 items-center justify-around">
                    <div className="flex flex-col items-center gap-4 justify-center p-5 border border-gray-300 rounded-xl shadow-sm">
                        <div className="p-3 bg-[#2f73f2] rounded-4xl"><Star size={35}
                            stroke="url(#silverGradient)" fill="url(#silverGradient)" /></div>
                        <p className="text-2xl font-semibold text-[#102D47] dark:text-white">4.9 Rating</p>
                        <p className="text-[16px]  text-[#102D47] dark:text-white">Rated by 3,500+ clients on Google <br /> and Clutch platforms</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 p-5 border border-gray-300 rounded-xl shadow-sm">
                        <div className="p-3 bg-[#2f73f2] rounded-4xl"><User size={35}
                            stroke="url(#silverGradient)" fill="url(#silverGradient)" /></div>
                        <p className="text-2xl font-semibold text-[#102D47] dark:text-white">4.9 Rating</p>
                        <p className="text-[16px]  text-[#102D47] dark:text-white">Rated by 3,500+ clients on Google <br /> and Clutch platforms</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center justify-around">
                    <div className="flex flex-col items-center justify-center gap-4 p-5 border border-gray-300 rounded-xl shadow-sm">
                        <div className="p-3 bg-[#2f73f2] rounded-4xl"><Wallet size={35}
                            stroke="url(#silverGradient)" fill="url(#silverGradient)" /></div>
                        <p className="text-2xl font-semibold text-[#102D47] dark:text-white">4.9 Rating</p>
                        <p className="text-[16px]  text-[#102D47] dark:text-white">Rated by 3,500+ clients on Google <br /> and Clutch platforms</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 p-5 border border-gray-300 rounded-xl shadow-sm">
                        <div className="p-3 bg-[#2f73f2] rounded-4xl"><Star size={35}
                            stroke="url(#silverGradient)" fill="url(#silverGradient)" /></div>
                        <p className="text-2xl font-semibold text-[#102D47] dark:text-white">4.9 Rating</p>
                        <p className="text-[16px]  text-[#102D47] dark:text-white">Rated by 3,500+ clients on Google <br /> and Clutch platforms</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-[#F5F9ff] dark:bg-[#000F30] py-12 '>

                    <div className='flex flex-col gap-4'>
                        <p className='text-[#102D47] text-5xl font-bold dark:text-white'>Client Reviews</p>
                    </div>
                    <div className='mx-20 mt-12'>
                        <Swiper
                            className="pb-20"
                            modules={[Autoplay, Pagination]}
                            spaceBetween={20}
                            slidesPerView={3}
                            loop={true}
                            speed={700}
                            centeredSlides={false}
                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                
                            }}
                        >
                            {reviewsData.map((obj, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className="" key={index}>
                                            <div className="flex gap-5">
                                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                                    <img className="" src={`/images/reviews/${obj.image}`} alt="" />
                                                </div>
                                                <div>
                                                    <p className='text-[16px] font-semibold mt-2'>{obj.name}</p>
                                                    <div>
                                                        {
                                                            <Rating rating={obj.rating}/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-sm mt-4'>{obj.review}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;