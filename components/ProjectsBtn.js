// next image
import Image from "next/image";

// tooltip
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

// next link
import Link from "next/link";

// icons
import { HiArrowRight } from "react-icons/hi2";
import { RiGithubLine } from "react-icons/ri";
import { SlPaperClip } from "react-icons/sl";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10 flex flex-col lg:flex-row justify-center items-center space-x-8">
      <Link
        href={"/contact"}
        className="relative w-[185px] h-[60px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group"
      >
        {/* <Image
          // src={'/rounded-text.png'}
          src={"/textround3.png"}
          width={200}
          height={200}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        /> */}
        <button className="bg-transparent hover:bg-[#F13024] text-[#F13024] font-semibold hover:text-white py-2 px-4 border border[#F13024] hover:border-transparent rounded">
          Contact Me
        </button>
      </Link>

      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Download Resume"
        data-tooltip-place="top"
        href={"https://react-tooltip.com/docs/examples/html"}
        className="hover:text-accent transition-all duration-300 py-2 px-4"
        target="_blank"
      >
        <SlPaperClip size={32} />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Github"
        href={""}
        className="hover:text-accent transition-all duration-300 py-2 px-4"
      >
        <RiGithubLine size={32} />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default ProjectsBtn;
