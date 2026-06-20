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

const containerIconStyles =
  "flex items-center justify-center bg-gray-200 z-99 tech-icon-container rounded-lg";
const iconStyles = "text-9xl tech-icon";

const TechStack = () => {
  return (
    <section className="w-full min-h-screen">
      <HeadingSection text="Umiejętności" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-3 lg:gap-2 min-h-screen">
        <div className={`lg:col-span-2 lg:row-span-2 ${containerIconStyles}`}>
          <FaReact className={iconStyles} />
        </div>

        <div className={`lg:col-start-3 ${containerIconStyles}`}>
          <FaHtml5 className={iconStyles} />
        </div>

        <div className={`lg:col-span-2 lg:col-start-4 ${containerIconStyles}`}>
          <FaCss3 className={iconStyles} />
        </div>

        <div
          className={`lg:row-span-2 lg:col-start-3 lg:row-start-2 ${containerIconStyles}`}
        >
          <BsTypescript className={iconStyles} />
        </div>

        <div
          className={`lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-2 ${containerIconStyles}`}
        >
          <FaTrello className={iconStyles} />
        </div>

        <div className={`lg:row-start-3 ${containerIconStyles}`}>
          <FaGithub className={iconStyles} />
        </div>

        <div className={`lg:row-start-3 ${containerIconStyles}`}>
          <IoLogoJavascript className={iconStyles} />
        </div>

        <div className={`lg:row-span-2 lg:row-start-4 ${containerIconStyles}`}>
          <GiJesterHat className={iconStyles} />
        </div>

        <div
          className={`lg:col-span-2 lg:row-span-2 lg:row-start-4 ${containerIconStyles}`}
        >
          <RiTailwindCssFill className={iconStyles} />
        </div>

        <div
          className={`lg:row-span-2 lg:col-start-4 lg:row-start-4 ${containerIconStyles}`}
        >
          <FaWordpress className={iconStyles} />
        </div>

        <div className={`lg:col-start-5 lg:row-start-4 ${containerIconStyles}`}>
          <FaConfluence className={iconStyles} />
        </div>

        <div className={`lg:col-start-5 lg:row-start-5 ${containerIconStyles}`}>
          <FaSass className={iconStyles} />
        </div>
      </div>
    </section>
  );
};
export { TechStack };
