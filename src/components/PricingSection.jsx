import { Check } from 'lucide-react'
import React, { useState } from 'react'

const PricingSection = () => {
    const [activePlan, setActivePlan] = useState('monthly')

    return (
        <section id='pricing' className="px-4 md:px-10">
            {/* Heading */}
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <p className="text-[#102D47] text-2xl sm:text-3xl md:text-5xl font-bold dark:text-white">
                    Choose The Plan That Fits You Best
                </p>
                <p className="text-[#102D47] text-sm sm:text-base md:text-xl dark:text-white max-w-2xl">
                    Explore pricing that aligns with your goals and delivers measurable results.
                </p>

                {/* Toggle */}
                <div className="bg-[#F5F9ff] dark:bg-[#000F30] flex p-2 rounded-md gap-2">
                    <button
                        className={`px-4 py-2 rounded-sm text-sm ${activePlan === 'monthly' ? 'active-price-btn' : 'price-btn'
                            }`}
                        onClick={() => setActivePlan('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-4 py-2 rounded-sm text-sm ${activePlan === 'yearly' ? 'active-price-btn' : 'price-btn'
                            }`}
                        onClick={() => setActivePlan('yearly')}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col lg:flex-row items-center justify-center my-12 gap-8">
                {/* Discount Card */}
                <div className="bg-blue-600 w-full lg:w-[30%] px-8 pt-10 rounded-xl shadow-xl text-center lg:text-left">
                    <p className="text-white text-xl md:text-2xl">
                        Choosing Yearly Plan Gives You{' '}
                        <span className="font-bold">Big 35% Discount.</span>
                    </p>
                    <img
                        src="/images/pricing/actor.webp"
                        className="w-full max-w-xs mx-auto mt-12"
                        alt=""
                    />
                </div>

                {/* Basic */}
                <div className="flex flex-col w-full sm:w-[85%] lg:w-[30%] gap-5 py-8 px-5 rounded-xl shadow-xl">
                    <p className="text-xl font-bold text-[#102D47] dark:text-white">
                        Basic
                    </p>
                    <p className="text-[#102D47] dark:text-white text-sm">
                        <span className="text-4xl font-bold">
                            {activePlan === 'monthly' ? '$9' : '$95'}
                        </span>
                        /month
                    </p>
                    <p className="text-[#102D47] dark:text-white">
                        Ideal For Freelancers And Startups
                    </p>

                    <hr className='text-gray-300' />

                    {[
                        'Consultation with strategy session',
                        'Basic design and development',
                        'One revision per project',
                        'Responsive on all devices',
                        'Email support included only',
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-[#F5F9ff] rounded-full flex items-center justify-center">
                                <Check size={16} strokeWidth={3} className="text-blue-500" />
                            </div>
                            <p className="text-[#102D47] dark:text-white text-sm">
                                {item}
                            </p>
                        </div>
                    ))}

                    <button className="w-full bg-blue-600 py-3 rounded-md text-white">
                        Buy Now
                    </button>
                </div>

                {/* Pro */}
                <div className="flex flex-col w-full sm:w-[85%] lg:w-[30%] gap-5 py-8 px-5 rounded-xl shadow-xl">
                    <p className="text-xl font-bold text-[#102D47] dark:text-white">
                        Pro
                    </p>
                    <p className="text-[#102D47] dark:text-white text-sm">
                        <span className="text-4xl font-bold">
                            {activePlan === 'monthly' ? '$19' : '$185'}
                        </span>
                        /month
                    </p>
                    <p className="text-[#102D47] dark:text-white">
                        Perfect for small growing teams.
                    </p>

                    <hr className='text-gray-300' />

                    {[
                        'Advanced project planning support',
                        'Premium design and development',
                        'Three revisions per project',
                        'Fully responsive and optimized',
                        'Priority email and chat support',
                    ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="w-8 h-8 bg-[#F5F9ff] rounded-full flex items-center justify-center">
                                <Check size={16} strokeWidth={3} className="text-blue-500" />
                            </div>
                            <p className="text-[#102D47] dark:text-white text-sm">
                                {item}
                            </p>
                        </div>
                    ))}

                    <button className="w-full bg-blue-600 py-3 rounded-md text-white">
                        Buy Now
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PricingSection
