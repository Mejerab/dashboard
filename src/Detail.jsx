import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Detail = () => {
    return (
        <div className="grid grid-cols-3 gap-5 font">
            <div className="bg-[#cceee1cc] col-span-2 rounded-xl flex px-8 py-7  justify-between items-center">
                <div className="space-y-5">
                    <h3 className="font font-bold text-2xl text-[#094948] leading-[36px]">Welcome Back 👋 <br /> Jaydon Frankie</h3>
                    <p className="font text-[14px] font-medium text-[#094948cc]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium expedita perspiciatis.</p>
                    <button className="btn btn-sm rounded-lg bg-[#00a96d] text-white h-[37px] hover:text-[#00a96d] hover:bg-white">Go Now</button>
                </div>
                <img src="https://i.imgur.com/QrxoYp9.png" alt="" />
            </div>
            <div className="rounded-xl relative">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: '#prev',
                        nextEl: '#next'
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="h-full rounded-xl"
                >
                    <SwiperSlide><div className="relative h-full">
                        <img className="w-full h-full rounded-xl" src="https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg?t=st=1737171899~exp=1737175499~hmac=43f5d6069e4b7612756c7eaa4dd5eb9f7740278ecc7b7aeb6e7d22e6899e5305&w=826" alt="" />
                        <div className="absolute bottom-5 text-white pl-8">
                            <h5 className="font font-semibold text-[#54db95]">Suggested App</h5>
                            <h4 className="font font-semibold text-xl">Loring the Hidden Gems of [Des...</h4>
                            <p className="text-[14px] font font-semibold text-[#646464]">Lorem ipsum dolor sit amet consectetur, adipisi...</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="relative h-full">
                        <img className="w-full h-full rounded-xl" src="https://img.freepik.com/free-photo/glowing-insects-night-forest_53876-144722.jpg?t=st=1737174548~exp=1737178148~hmac=a1e77af4982e18e0f0b0e07773045c935771ef127f87bdf512aee0282203a5c1&w=826" alt="" />
                        <div className="absolute bottom-5 text-white pl-8">
                            <h5 className="font font-semibold text-[#54db95]">Suggested App</h5>
                            <h4 className="font font-semibold text-xl">Loring the Hidden Gems of [Des...</h4>
                            <p className="text-[14px] font font-semibold text-[#646464]">Lorem ipsum dolor sit amet consectetur, adipisi...</p>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="relative h-full">
                        <img className="w-full h-full rounded-xl" src="https://img.freepik.com/free-photo/beautiful-view-flamingos-lake-with-mountain-ranges_181624-35051.jpg?t=st=1737174601~exp=1737178201~hmac=a04eaf3c5e3fb7e8997f6d2b2f5451402a7f1b56afa3ad656a76bab60f491d31&w=900" alt="" />
                        <div className="absolute bottom-5 text-white pl-8">
                            <h5 className="font font-semibold text-[#54db95]">Suggested App</h5>
                            <h4 className="font font-semibold text-xl">Loring the Hidden Gems of [Des...</h4>
                            <p className="text-[14px] font font-semibold text-[#646464]">Lorem ipsum dolor sit amet consectetur, adipisi...</p>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
                <div className='absolute top-2 right-1 z-30'>
                    <button id='prev' className='mx-1 text-[#5d6d7c] hover:text-[#ffffff99] tra'><MdKeyboardArrowRight className='rotate-180 text-2xl' /></button>
                    <button id='next' className='mx-1 text-[#5d6d7c] hover:text-[#ffffff99] tra'><MdKeyboardArrowRight className='text-2xl' /></button>
                </div>
            </div>
            <div className='h-[170px] flex justify-between items-center border border-[#2727271A] p-5 rounded-xl w-full shadow-sm'>
                <div className='space-y-3'>
                    <h5 className='text-base text-[#171e26] font-semibold'>Total Active Users</h5>
                    <div className='flex items-start gap-x-2 font-semibold text-[14px]'>
                        <img src="https://i.imgur.com/uJD1wD8.png" alt="" /><span>+2.6%</span>
                    </div>
                    <h3 className='text-4xl font-bold'>18,756</h3>
                </div>
                <img className='w-16' src="https://i.imgur.com/Poybmma.png" alt="" />
            </div>
            <div className='h-[170px] flex justify-between items-center border border-[#2727271A] p-5 rounded-xl w-full shadow-sm'>
                <div className='space-y-3'>
                    <h5 className='text-base text-[#171e26] font-semibold'>Total Active Users</h5>
                    <div className='flex items-start gap-x-2 font-semibold text-[14px]'>
                        <img src="https://i.imgur.com/uJD1wD8.png" alt="" /><span>+0.2%</span>
                    </div>
                    <h3 className='text-4xl font-bold'>4,876</h3>
                </div>
                <img className='w-16' src="https://i.imgur.com/CfPFlLB.png" alt="" />
            </div>
            <div className='h-[170px] flex justify-between items-center border border-[#2727271A] p-5 rounded-xl w-full shadow-sm'>
                <div className='space-y-3'>
                    <h5 className='text-base text-[#171e26] font-semibold'>Total Active Users</h5>
                    <div className='flex items-start gap-x-2 font-semibold text-[14px]'>
                        <img className='w-[1.24rem]' src="https://i.imgur.com/339Qhh5.png" alt="" /><span>-0.1%</span>
                    </div>
                    <h3 className='text-4xl font-bold'>678</h3>
                </div>
                <img className='w-16' src="https://i.imgur.com/BxmCNB1.png" alt="" />
            </div>
        </div>
    );
};

export default Detail;