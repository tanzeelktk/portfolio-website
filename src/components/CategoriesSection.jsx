import { CheckCircle, Loader } from "lucide-react"

const CategoriesSection = () => {

    return (
        <section id="categories" className='mt-30'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <p className='text-[#102D47] text-5xl font-bold dark:text-white'>Discover What We Can Do</p>
                <p className='text-[#102D47] text-xl dark:text-white '>Dive into our categories to
                    find tailored services that drive results.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mx-6 my-15 items-center justify-center">

                {/* Left Big Card */}
                <div className="relative group rounded-lg overflow-hidden hover:cursor-pointer">
                    <img
                        src="/images/category/webdev.webp"
                        className="w-full h-full object-cover"
                        alt="Web Development"
                    />

                    <div className="absolute w-full inset-x-0 h-60 bg-gradient-to-t from-black/80 to-transparent translate-y-50 group-hover:translate-y-0 py-5 
                    transition-transform duration-400 bottom-0 flex items-center justify-center ">
                        <div className="absolute bottom-10 left-10 flex items-center justify-center gap-2">
                            <img src="/verified.svg" className="w-4 h-4" />
                            <h2 className="text-white text-2xl font-bold ">
                                Web Development
                            </h2>
                        </div>

                    </div>
                </div>

                {/*Right Cards*/}
                <div className="flex flex-col gap-5 items-center justify-center">
                    {
                        [
                            [
                                { title: 'App Development', img: '/images/category/mobileapp.webp' },
                                { title: 'Logo Designing', img: '/images/category/logods.webp' }
                            ],
                            [
                                { title: 'Content Writing', img: '/images/category/contentwrite.webp' },
                                { title: 'Digital Marketing', img: '/images/category/digitalmarket.webp' }
                            ]

                        ].map((array, index) => {
                            return (
                                <div className="flex gap-5">
                                    {
                                        array.map((service, index) => {
                                            return (
                                                <div className="relative group rounded-lg overflow-hidden hover:cursor-pointer">
                                                    <img
                                                        src={service.img}
                                                        className="w-full h-full object-cover"
                                                        alt={service.title}
                                                    />
                                                    <div className="absolute w-full inset-x-0 h-30 bg-gradient-to-t from-black/80 to-transparent 
                                                                translate-y-50 group-hover:translate-y-0 py-5 
                                                            transition-transform duration-500 bottom-0 flex items-center justify-center ">
                                                        <div className="absolute bottom-5 left-2 flex flex-col md:flex-row items-center justify-center  md:gap-2">
                                                            <img src="/verified.svg" className="w-4 h-4" />
                                                            <h2 className="text-white text-2xl font-bold ">
                                                                {service.title}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection