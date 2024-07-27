import { Nav } from "./components/Nav";
import { Sidecar } from "./components/Sidecar";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="  bg-mainBG dark:bg-grey-100  flex flex-col color-transition grain-effect  ">
      <Nav />

      <div className="   flex flex-row  ">
        <Sidecar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}
