// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Wild Oasis Hotel",
          path: "/oasis_final.png",
          text: "A full-stack web application that allows the user to control all aspects of the hotel and it's bookings. Tech Stack : React | Redux | React Query | Recharts | Tailwind | Supabase",
          webLink: "https://hotelwildoasis.vercel.app/",
          gitLink: "https://github.com/EverythingsInMotion/hotelwildoasis",
        },
        {
          title: "Online Pizza Shop",
          path: "/pizza_final.png",
          text: "A React application that allows the user to order pizzas online. Tech Stack : React | Redux | CSS",
          webLink: "https://myreactpizza.vercel.app/",
          gitLink: "https://github.com/EverythingsInMotion/reactpizza",
        },
        {
          title: "WorldWise Visit",
          path: "/world_final.png",
          text: "A React application that allows users to log their travels around the world. Add a city to their list of visited cities and pin them on the map. Tech Stack : React | CSS",
          webLink: "https://myworldwise.vercel.app/",
          gitLink: "https://github.com/EverythingsInMotion/worldwise",
        },
        {
          title: "Learn Today",
          path: "/today_final.png",
          text: "A cross between news and Twitter (X). A full stack application that allows users to upload short news snippets and categorise them into segments. Tech Stack: React | Supabase | CSS",
          webLink: "https://learntoday.netlify.app/",
          gitLink: "https://github.com/EverythingsInMotion/learntodayapp",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "title",
    //       path: "/thumb4.jpg",
    //       text: "hello world",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //       text: "hello world",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //       text: "hello world",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //       text: "hello world",
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const WorkSlider = ({ setText }) => {
  return (
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // navigation={true}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                    key={index}
                    onClick={() => setText(image)}
                    // onMouseEnter={() => setText(image)}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={300} height={400} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title */}
                          <div className="delay-100">LIVE PROJECT</div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all  delay-100">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
