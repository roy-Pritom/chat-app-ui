
const ChatBox = () => {
    return (
        <div>
            <div className="flex items-center justify-between pl-7 py-2 mb-5">
                <div className="flex items-center justify-center gap-5">
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#69235B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="relative">
                        <img src="https://s3-alpha-sig.figma.com/img/3e90/170e/9815ef0380d9b0157bf2554c4acfafd3?Expires=1691366400&Signature=RaAWFiAChIQBkUgJc7v6xopQeDsERzBj1cdUe~-A-O9bEEpbZ2TAV3Qa0HcnLtn-AtnzjfZ3M1hbF~GePWHFwrwlYnrmyE57b06XA4VU4XOOiPIv5jfFx5CyvqOorGYvNPw7mRRDU4W5oxib1XJLxGRJCekWLwj-DUSGte3baCAXa-OXW5XMb88eBwoOkHDCPRQwi50hW10x8XDkKbwi2rRBIldb7RJAAHPj5jxm9c9OYDD-k8jAmyaxVOT6olTu2BUP75hM0SRdIeDCvGBoOsnlKvFI7ONmY8qkgdFAC2zFEEA5pGMb-pKYPZlpUMvT8Rg4MhB9NgXl53IhAm6~3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="md:w-[60px] md:h[60px] w-[44px] h-[44px] rounded-[50%]" />
                        <div className="absolute md:left-[45px] md:top-[35px] left-[32px] top-[35px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#2BEF83" />
                            </svg>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-[#69235B] md:text-xl text-base font-medium">Arya</p>
                        <p className="text-[#797C7B] md:text-sm text-xs font-thin">Vedic AI Bot</p>
                    </div>
                </div>
                <div className="pr-6">
                    <p className="text-[#FBDC94] md:text-lg text-base  "><span className="font-extrabold">A</span><span className="font-[275px]">/क</span></p>
                </div>
            </div>

            <div className="bg-purple-50 p-5  lg:h-full">
                <div className="flex gap-4">
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/3e90/170e/9815ef0380d9b0157bf2554c4acfafd3?Expires=1691366400&Signature=RaAWFiAChIQBkUgJc7v6xopQeDsERzBj1cdUe~-A-O9bEEpbZ2TAV3Qa0HcnLtn-AtnzjfZ3M1hbF~GePWHFwrwlYnrmyE57b06XA4VU4XOOiPIv5jfFx5CyvqOorGYvNPw7mRRDU4W5oxib1XJLxGRJCekWLwj-DUSGte3baCAXa-OXW5XMb88eBwoOkHDCPRQwi50hW10x8XDkKbwi2rRBIldb7RJAAHPj5jxm9c9OYDD-k8jAmyaxVOT6olTu2BUP75hM0SRdIeDCvGBoOsnlKvFI7ONmY8qkgdFAC2zFEEA5pGMb-pKYPZlpUMvT8Rg4MhB9NgXl53IhAm6~3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-[60px] md:h[60px] w-[44px] h-[44px] rounded-[50%]" alt="" />
                    </div>
                    <div className="text-white font-normal md:text-sm text-xs bg-[#69235B] p-4 rounded-lg mt-2 lg:w-[28%]">
                        <p>
                            🙏 Namaste!  I’m Arya, your AI Vedic help. <br /> I'm here to provide insights from Vedas for <br /> daily life concerns.
                        </p>
                        <p className="mt-10">Whether you seek guidance on mantras,<br /> general life advice, or specific Vedic <br /> interpretations, I’m here to assist you.</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-7 justify-center md:justify-start md:ml-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                        <path d="M4.22222 21L8.44444 13.125L0 12.075L12.6667 0H14.7778L10.5556 7.875L19 8.925L6.33333 21H4.22222Z" fill="#69235B" />
                    </svg>
                    <p className="text-[#69235B] text-base font-normal md:text-base">You can ask queries like:</p>
                </div>
                <div className="bg-[#FBBC04] rounded-[19px] p-4 lg:w-[28%] md:w-[47%] md:mt-4 mt-3 md:ml-16 ml-10">
                    <p className="text-[#69235B] md:text-sm text-xs font-normal">What is the mantra in Rigveda 10.2.3?</p>
                </div>
                <div className="bg-[#FBBC04] rounded-[19px] p-4 lg:w-[28%] md:w-[47%] md:my-2 my-1 md:ml-16 ml-10">
                    <p className="text-[#69235B] md:text-sm text-xs font-normal">What are the prescribed Vedic remedies <br /> for snake bites?</p>
                </div>
                <div className="bg-[#FBBC04] rounded-[19px] p-4 lg:w-[28%] md:w-[47%] md:ml-16 ml-10">
                    <p className="text-[#69235B] md:text-sm text-xs font-normal">Can you tell me the significance of the <br /> Gayatri Mantra?</p>
                </div>
                <div className="flex items-center md:gap-2 gap-1 mt-6 md:ml-8 ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                        <path d="M8.5 1L1 13H16L8.5 1Z" stroke="#69235B" strokeLinejoin="round" />
                        <path d="M8.5 10.4737V10.7895M8.5 5.42104L8.50316 8.57894" stroke="#69235B" strokeLinecap="round" />
                    </svg>
                    <p className="text-[#69235B] md:text-base text-[13px] font-normal">Limitation: May struggle with complex queries.</p>
                </div>

                <div className="flex gap-4 mt-12">
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/3e90/170e/9815ef0380d9b0157bf2554c4acfafd3?Expires=1691366400&Signature=RaAWFiAChIQBkUgJc7v6xopQeDsERzBj1cdUe~-A-O9bEEpbZ2TAV3Qa0HcnLtn-AtnzjfZ3M1hbF~GePWHFwrwlYnrmyE57b06XA4VU4XOOiPIv5jfFx5CyvqOorGYvNPw7mRRDU4W5oxib1XJLxGRJCekWLwj-DUSGte3baCAXa-OXW5XMb88eBwoOkHDCPRQwi50hW10x8XDkKbwi2rRBIldb7RJAAHPj5jxm9c9OYDD-k8jAmyaxVOT6olTu2BUP75hM0SRdIeDCvGBoOsnlKvFI7ONmY8qkgdFAC2zFEEA5pGMb-pKYPZlpUMvT8Rg4MhB9NgXl53IhAm6~3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-[60px] md:h[60px] w-[44px] h-[44px] rounded-[50%]" alt="" />
                    </div>
                    <div className="text-white font-normal md:text-sm text-xs bg-[#69235B] p-4 rounded-lg mt-2 w-20%]">
                        <p>
                            Let your curiosity guide you; wishing <br /> you blessings and enlightenment 🕉️
                        </p>

                    </div>
                </div>


                {/* 2nd chat */}
                <div className="relative flex items-center justify-end mt-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="141" height="36" viewBox="0 0 141 36" fill="none">
                        <path d="M141 0H18C12.4087 0 9.61305 0 7.40781 0.913446C4.46747 2.13137 2.13138 4.46746 0.913452 7.4078C0 9.61305 0 12.4087 0 18C0 23.5913 0 26.3869 0.913452 28.5922C2.13138 31.5325 4.46747 33.8686 7.40781 35.0866C9.61305 36 12.4087 36 18 36H123C128.591 36 131.387 36 133.592 35.0866C136.533 33.8686 138.869 31.5325 140.087 28.5922C141 26.3869 141 23.5913 141 18V0Z" fill="#FBBC04" />
                    </svg>
                    <p className="absolute right-0 mr-2 text-white font-normal md:text-sm text-xs ">Hello! How are you?</p>
                </div>

                <div className="flex gap-4 mt-12">
                    <div className="">
                        <img src="https://s3-alpha-sig.figma.com/img/3e90/170e/9815ef0380d9b0157bf2554c4acfafd3?Expires=1691366400&Signature=RaAWFiAChIQBkUgJc7v6xopQeDsERzBj1cdUe~-A-O9bEEpbZ2TAV3Qa0HcnLtn-AtnzjfZ3M1hbF~GePWHFwrwlYnrmyE57b06XA4VU4XOOiPIv5jfFx5CyvqOorGYvNPw7mRRDU4W5oxib1XJLxGRJCekWLwj-DUSGte3baCAXa-OXW5XMb88eBwoOkHDCPRQwi50hW10x8XDkKbwi2rRBIldb7RJAAHPj5jxm9c9OYDD-k8jAmyaxVOT6olTu2BUP75hM0SRdIeDCvGBoOsnlKvFI7ONmY8qkgdFAC2zFEEA5pGMb-pKYPZlpUMvT8Rg4MhB9NgXl53IhAm6~3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="md:w-[60px] md:h[60px] w-[44px] h-[44px] rounded-[50%]" alt="" />
                    </div>
                    <div className="relative flex items-center justify-end  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="36" viewBox="0 0 180 36" fill="none">
                            <path d="M0 0H162C167.591 0 170.387 0 172.592 0.913446C175.533 2.13137 177.869 4.46746 179.087 7.4078C180 9.61305 180 12.4087 180 18C180 23.5913 180 26.3869 179.087 28.5922C177.869 31.5325 175.533 33.8686 172.592 35.0866C170.387 36 167.591 36 162 36H18C12.4087 36 9.61305 36 7.4078 35.0866C4.46746 33.8686 2.13137 31.5325 0.913446 28.5922C0 26.3869 0 23.5913 0 18V0Z" fill="#69235B" />
                        </svg>
                        <p className="absolute right-0 mr-1 text-white font-normal md:text-sm text-xs">
                            Hello ! Nazrul How are you?
                        </p>

                    </div>
                </div>
                    <div className="relative flex items-center justify-start md:ml-20 ml-16 mt-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="36" viewBox="0 0 112 36" fill="none">
                            <path d="M0 0H94C99.5913 0 102.387 0 104.592 0.913446C107.533 2.13137 109.869 4.46746 111.087 7.4078C112 9.61305 112 12.4087 112 18C112 23.5913 112 26.3869 111.087 28.5922C109.869 31.5325 107.533 33.8686 104.592 35.0866C102.387 36 99.5913 36 94 36H18C12.4087 36 9.61305 36 7.4078 35.0866C4.46746 33.8686 2.13137 31.5325 0.913446 28.5922C0 26.3869 0 23.5913 0 18V0Z" fill="#69235B" />
                        </svg>
                        <p className="absolute left-0 ml-1 text-white font-normal md:text-sm text-xs ">Hope you like it</p>
                    </div>

                {/* send */}

                <div className=" text-[#A1A1A1] md:text-sm text-[13px] font-normal mt-20 relative flex items-center ">
                    <input type="text" placeholder="Write your message" className="rounded-[30px] shadow-xl px-3 py-5 lg:w-[36%] md:w-[450px] w-[350px]" />
                    <div className="flex items-center absolute lg:left-[350px] md:left-[375 px] left-[275px]  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.07 8.51001L9.51002 4.23001C3.76002 1.35001 1.40002 3.71001 4.28002 9.46001L5.15002 11.2C5.40002 11.71 5.40002 12.3 5.15002 12.81L4.28002 14.54C1.40002 20.29 3.75002 22.65 9.51002 19.77L18.07 15.49C21.91 13.57 21.91 10.43 18.07 8.51001ZM14.84 12.75H9.44002C9.03002 12.75 8.69002 12.41 8.69002 12C8.69002 11.59 9.03002 11.25 9.44002 11.25H14.84C15.25 11.25 15.59 11.59 15.59 12C15.59 12.41 15.25 12.75 14.84 12.75Z" fill="#69235B" />

                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_582_842)">
                                <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.34998 9.64999V11.35C4.34998 15.57 7.77998 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.64999" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.2 8.55001C11.73 8.41001 12.28 8.41001 12.81 8.55001" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19V22" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_582_842">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ChatBox;