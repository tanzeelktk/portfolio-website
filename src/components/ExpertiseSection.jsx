import { BarChart3, Code, Code2, Edit2, Edit3, FileText, Globe, LayoutGrid, Megaphone, Monitor, Smartphone } from 'lucide-react'
import React from 'react'

const ExpertiseSection = () => {

    const expertiseData = [
        {
            title: "Web Design",
            description: "Modern, responsive websites built to engage users and convert leads.",
            icon: 'webdesign.svg'
        },
        {
            title: "Logo Design",
            description: "Distinct, memorable logos crafted to define and elevate your brand.",
            icon: 'logodesign.svg'
        },
        {
            title: "Mobile App Development",
            description: "Custom iOS and Android apps with seamless flow and functionality.",
            icon: 'mobileapp.svg'
        },
        {
            title: "Content Writing",
            description: "SEO-driven content designed to educate, engage, and boost visibility.",
            icon: 'contentwrite.svg'
        },
        {
            title: "SEO Optimization",
            description: "Strategic SEO practices to improve search rankings and drive traffic.",
            icon: 'seooptimize.svg'
        },
        {
            title: "Digital Marketing",
            description: "Targeted digital campaigns to build awareness and grow your audience.",
            icon: 'digitalmarketing.svg'
        }
    ];

    return (
        <section id='expertise' className='py-30'>
            <div>
                <p className='text-[#102D47] text-5xl font-bold dark:text-white'>Our Expertise</p>
                <p className='text-[#102D47] text-xl dark:text-white mt-5'>Our team crafts creative strategies that elevate your brand, engage your audience,
                    <br /> And drive results.</p>
            </div>

            <div className='mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-15'>
                {expertiseData.map((service, index) => {
                    return (
                        <div className='flex flex-col items-start justify-center gap-3 bg-[#F5F9ff] dark:bg-[#000F30] p-10 rounded-sm'>
                            <div className="relative w-10 h-10 bg-sky-600 flex items-center justify-center rounded-sm shadow-xl">
                                <img src={`/images/expertise/${service.icon}`} className="w-7 h-7" color='white' />
                            </div>
                            <h2 className='w-full text-left text-[#102D47] text-2xl font-bold dark:text-white'>{service.title}</h2>
                            <p className='w-full text-left text-[#102D47] text-[18px] dark:text-white'>{service.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ExpertiseSection