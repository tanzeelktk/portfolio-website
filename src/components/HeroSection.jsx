import { useEffect, useRef, useState } from 'react';
function HeroSection(props) {
    const [fade, setFade] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerImages = [
        '/images/banner/blogforgeCover.webp',
        '/images/banner/gleamerCover.webp',
        '/images/banner/learnaxisCover.webp',
        '/images/banner/studiovaCover.webp'
    ];
    const intervalRef = useRef()

    function startSlider() {
        intervalRef.current = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex(prev =>
                    (prev + 1) % bannerImages.length
                )
                setFade(true)
            }, 500);
        }, 3000)
    }

    function stopSlider() {
        clearInterval(intervalRef.current)
    }

    const goToSlide = (index) => {
        stopSlider();
        setFade(false);

        setTimeout(() => {
            setCurrentIndex(index);
            setFade(true);
            startSlider();
        }, 300);
    };

    useEffect(() => {
        startSlider();
        return () => stopSlider()
    }, [])



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
            <div className='flex flex-col items-center justify-center relative gap-4 hover:cursor-pointer'>
                <div className=" flex w-[80%] h-[80%] rounded-xl overflow-hidden"
                    onMouseEnter={stopSlider}
                    onMouseLeave={startSlider}>
                    {/* Current Image */}
                    <img
                        src={bannerImages[currentIndex]}
                        className={`w-full h-full object-cover
                        transition-opacity duration-500
                        ${fade ? "opacity-100" : "opacity-0"}`}
                        alt=""
                    />

                </div>
                <div className=" bottom-4 flex items-center justify-center gap-2">
                    {bannerImages.map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer
                            ${currentIndex === index
                                    ? 'bg-blue-500 scale-125 dark:bg-blue-400'
                                    : 'bg-blue-900 hover:bg-blue-700 dark:bg-white'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;