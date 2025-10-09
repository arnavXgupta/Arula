import React from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal'
import Image from 'next/image'

export const Video = () => {
    return (
        <section className='flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-7xl w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
                {/* Left side - Video Modal */}
                <div className='order-2 lg:order-1'>
                    <Modal>
                        <ModalTrigger className="bg-white group text-black flex justify-center group/modal-btn w-full">
                            <div className='relative w-full max-w-lg lg:max-w-none'>
                                <Image 
                                    src="/maam.png" 
                                    width={1000} 
                                    height={1000} 
                                    className='w-full h-auto transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-lg shadow-lg border' 
                                    alt="ai" 
                                />
                                <div className="absolute inset-0 flex items-center cursor-pointer justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl">
                                    <div className='bg-[#18181b]/10 flex items-center justify-center rounded-full backdrop-blur-md size-20 sm:size-24 md:size-28'>
                                        <div className='flex items-center justify-center bg-gradient-to-b from-[#18181b]/30 to-[#18181b] shadow-md rounded-full size-14 sm:size-16 md:size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-play size-5 sm:size-6 md:size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                                                style={{
                                                    filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
                                                }}
                                            >
                                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalTrigger>
                        <ModalBody className='bg-transparent border-none aspect-video'>
                            <ModalContent className='bg-transparent p-2 md:p-4 aspect-video w-full max-w-4xl'>
                                <div className='p-2 rounded-lg bg-white/90 h-full'>
                                    <video autoPlay loop className='w-full h-full rounded-lg' controls>
                                        <source src="/example.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </ModalContent>
                        </ModalBody>
                    </Modal>
                </div>

                {/* Right side - Text Content */}
                <div className='order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left lg:pl-6 xl:pl-10'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl py-1 bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent font-bold leading-tight'>
                        Watch Our Story
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                        Discover how we are transforming the way people experience and interact with technology. 
                        Click the video to learn more about our journey, our mission, and the innovative solutions 
                        we are building to make a difference.
                    </p>
                </div>
            </div>
        </section>
    )
}