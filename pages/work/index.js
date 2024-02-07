// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";

// tooltips
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

// icons
import { RiGithubLine } from "react-icons/ri";
import { FaChrome } from "react-icons/fa";

const Work = () => {
  const [text, setText] = useState({});
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />

      {/* content */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            {Object.entries(text).length ? (
              <motion.h2 className="h2 xl:mt-12">{text.title}</motion.h2>
            ) : (
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                My <span className="text-accent">Work .</span>
              </motion.h2>
            )}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              {Object.entries(text).length
                ? text.text
                : "Click on the projects to see a demo hosting or the Github repository."}
            </motion.p>
            {Object.entries(text).length ? (
              <div className="flex justify-center">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Live Demo"
                  data-tooltip-place="bottom"
                  href={text.webLink}
                  className="hover:text-accent transition-all duration-300 py-2 px-4"
                  target="_blank"
                >
                  <FaChrome size={32} />
                </a>
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Github"
                  data-tooltip-place="bottom"
                  href={text.gitLink}
                  target="_blank"
                  className="hover:text-accent transition-all duration-300 py-2 px-4"
                >
                  <RiGithubLine size={32} />
                </a>
                <Tooltip id="my-tooltip" />
              </div>
            ) : null}
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider setText={setText} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
