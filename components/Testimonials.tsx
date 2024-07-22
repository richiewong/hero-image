'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';

export default function Testimonials() {
  return (
    <div className="bg-2 rounded-[40px] text-white p-8 text-left h-full w-full block">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="md:w-1/2 md:mx-auto">
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>&quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-2"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="md:w-1/2 md:mx-auto">
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>&quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-2"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="md:w-1/2 md:mx-auto">
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>&quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-2"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="md:w-1/2 md:mx-auto">
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>&quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-2"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center flex justify-center items-center">
          <div className="md:w-1/2 md:mx-auto">
            <div className="border border-solid border-[#B9FF66] rounded-[40px] mb-10 px-6 py-8 relative">
              <div>&quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;</div>
              <div className="absolute p-4 -bottom-4 left-10 h-4 w-4 rotate-45 border-b border-r border-solid border-[#B9FF66] bg-2"></div>
            </div>
            <div className="px-8">
              <div className="font-medium text-[#B9FF66]">John Smith</div>
              <div>Marketing Director at XYZ Corp</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
