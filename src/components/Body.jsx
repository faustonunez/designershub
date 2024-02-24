import { Header } from "./Header";
import { CoursesSec } from "./SecCourses";
import { Webinars } from "./SecWebinars";
import { Films } from "./SecFilms";
import { Books } from "./SecBooks";
import { Podcasts } from "./SecPodcast";
import { ContactForm } from "./ContactForm";

export function Body() {
  return (
    <div className=" flex flex-col gap-11   px-5 pt-8 pb-20   ">
      <Header />
      <CoursesSec />
      <Webinars />
      <ContactForm />
      <Books />
      <Films />
      <Podcasts />
    </div>
  );
}
