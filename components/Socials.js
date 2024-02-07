// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTreasureMapFill,
} from "react-icons/ri";
import { SlPaperClip } from "react-icons/sl";

// tooltip
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Download Resume"
        data-tooltip-place="bottom"
        href={"https://react-tooltip.com/docs/examples/html"}
        className="hover:text-accent transition-all duration-300 py-2 px-4"
        target="_blank"
      >
        <SlPaperClip />
      </a>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Github"
        href={""}
        className="hover:text-accent transition-all duration-300 py-2 px-4"
      >
        <RiGithubLine />
      </a>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Socials;
