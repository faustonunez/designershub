import { MenuItem } from "./MenuItem";
import CoursesIcon from "../assets/icons/courses.svg?react";
import Popcast from "../assets/icons/podcast.svg?react";
import Film from "../assets/icons/film.svg?react";
import Books from "../assets/icons/books.svg?react";
{
  /*import Workshops from "../assets/icons/workshops.svg?react";*/
}
import Webinar from "../assets/icons/webinar.svg?react";

export function Sidecar() {
  return (
    <div
      id="toggle"
      className=" font-roboto drop-shadow-xl sm:drop-shadow-none  fixed sm:sticky top-[96px] left-0  w-[300px]  h-full sm:bg-transparent dark:sm:bg-transparent   bg-grey-500  dark:bg-[#090819] p-5 hidden md:block sm:mr-11 color-transition origin-left"
    >
      <div>
        <MenuItem
          text="Courses"
          ImageComponent={CoursesIcon}
          href="#courses-sec"
        />
        <MenuItem
          text="Webinars"
          ImageComponent={Webinar}
          href="#webinar-sec"
        />
        {/*<MenuItem text="Workshops" ImageComponent={Workshops} />*/}
        <MenuItem text="Books" ImageComponent={Books} href="#books-sec" />
        <MenuItem text="Films" ImageComponent={Film} href="#films-sec" />
        <MenuItem
          text="Podcast"
          ImageComponent={Popcast}
          href="#podcasts-sec"
        />
      </div>
    </div>
  );
}
