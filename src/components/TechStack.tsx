import {
  FaConfluence,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
  FaTrello,
  FaWordpress,
} from "react-icons/fa";
import { HeadingSection } from "./HeadingSection";
import { BsTypescript } from "react-icons/bs";
import { GiJesterHat } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { AnimationDiv } from "./AnimationDiv";

const containerIconStyles =
  "flex items-center justify-center bg-gray-200 z-99 tech-icon-container rounded-lg relative py-8 lg:py-0";
const iconStyles = "text-9xl tech-icon";
const textStyles =
  "absolute uppercase tracking-wider text-gray-400 tech-text px-2  lg:opacity-0 lg:text-xl xl:text-3xl";

const TechStack = () => {
  return (
    <section className="w-full min-h-screen" id="skills">
      <HeadingSection text="Umiejętności" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-3 lg:gap-2 min-h-screen">
        <AnimationDiv
          className={`lg:col-span-2 lg:row-span-2 ${containerIconStyles}`}
        >
          <p className={textStyles}>react</p>
          <FaReact className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv className={`lg:col-start-3 ${containerIconStyles}`}>
          <p className={textStyles}>html</p>
          <FaHtml5 className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:col-span-2 lg:col-start-4 ${containerIconStyles}`}
        >
          <p className={textStyles}>css</p>
          <FaCss3 className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:row-span-2 lg:col-start-3 lg:row-start-2 ${containerIconStyles}`}
        >
          <p className={textStyles}>typescript</p>
          <BsTypescript className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-2 ${containerIconStyles}`}
        >
          <p className={textStyles}>trello</p>
          <FaTrello className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv className={`lg:row-start-3 ${containerIconStyles}`}>
          <p className={textStyles}>github</p>
          <FaGithub className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv className={`lg:row-start-3 ${containerIconStyles}`}>
          <p className={textStyles}>javascript</p>
          <IoLogoJavascript className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:row-span-2 lg:row-start-4 ${containerIconStyles}`}
        >
          <p className={textStyles}>jest</p>
          <GiJesterHat className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:col-span-2 lg:row-span-2 lg:row-start-4 ${containerIconStyles}`}
        >
          <p className={textStyles}>tailwindcss</p>
          <RiTailwindCssFill className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:row-span-2 lg:col-start-4 lg:row-start-4 ${containerIconStyles}`}
        >
          <p className={textStyles}>wordpress</p>
          <FaWordpress className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:col-start-5 lg:row-start-4 ${containerIconStyles}`}
        >
          <p className={textStyles}>confluence</p>
          <FaConfluence className={iconStyles} />
        </AnimationDiv>

        <AnimationDiv
          className={`lg:col-start-5 lg:row-start-5 ${containerIconStyles}`}
        >
          <p className={textStyles}>sass</p>
          <FaSass className={iconStyles} />
        </AnimationDiv>
      </div>
    </section>
  );
};
export { TechStack };
