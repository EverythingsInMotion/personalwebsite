/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
  FaWindows,
} from "react-icons/fa";

import {
  SiMicrosoftexcel,
  SiNextdotjs,
  SiPowerbi,
  SiTailwindcss,
} from "react-icons/si";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
          // <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        title: "Data Analytics",
        icons: [
          // <FaFigma />,
          // <SiAdobexd />,
          // <SiAdobephotoshop />,
          <FaPython />,
          <FaWindows />,
          <SiPowerbi />,
          <SiMicrosoftexcel />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Algorithmic Trader - Self Employed",
        stage: "2021 - 2024",
      },
      {
        title: "Data Analyst - DB Schenker",
        stage: "2020 - 2021",
      },
      {
        title: "Software Engineer - Footieculture India Pvt Ltd",
        stage: "2015 - 2018",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title:
          "Masters in Information Technology - University of Wollongong, Australia",
        stage: "2018",
      },
      {
        title:
          "Bachelors Computer Science and Engineering - MSRIT, Bangalore India",
        stage: "2014",
      },
    ],
  },
];

// components
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Avatar from "../../components/Avatar";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            A little <span className="text-accent">about</span> me.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            My name is Sourabh. I am a passionate software developer based in
            Canada. I have a track record of delivering scalable and efficient
            projects on time and within budget, with expertise in React and
            Express.
          </motion.p>
          {/* counters */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:pt-32"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
