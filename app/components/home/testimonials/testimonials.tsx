import { SwiperSlide } from "swiper/react";

export function Testimonials({ comment="" , name ="", position ="" }) {
  return (
    <SwiperSlide>
      <div>
        <div className="m-3 md:block font-normal text-lg text-[#fff] border border-green rounded-4xl px-12 pt-12 pb-20">
          {comment}
        </div>
        <div className="pt-5 pl-10">
          <div className="font-normal text-lg text-green">{name}</div>
          <div className="font-normal text-lg text-[#fff]">{position}</div>
        </div>
      </div>
    </SwiperSlide>

  );
}
