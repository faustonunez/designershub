import { Nav } from "./components/Nav";
import { Sidecar } from "./components/Sidecar";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className=" bg-slate-100 dark:bg-[#090819]  flex flex-col color-transition grain-effect ">
      <Nav />

      <dialog>Hello There</dialog>
      <div className="   flex flex-row ">
        <Sidecar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
