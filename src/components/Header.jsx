import headerImage from "../assets/mirage-virtual-reality-1.png";

export function Header() {
  return (
    <div className="  md:h-[343px] w-100 bg-primary rounded-lg flex flex-col sm:flex-row p-8 md:justify-between">
      <div className="  p-1 md:w-1/2 sm:w-full  flex items-center text-grey-10">
        <h1>A curated list of learning resources for creative.</h1>
      </div>
      <div className=" flex justify-center md:w-1/3">
        <img
          className=" w-1/3 sm:w-full  object-contain"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/creative-businessman-3613219-3032449.png"
          alt="Header Image"
        />
      </div>
    </div>
  );
}
