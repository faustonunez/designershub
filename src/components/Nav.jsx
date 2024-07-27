import React, { useState, useEffect } from "react";
import Logo from "../assets/designerhub-logo-light.svg?react";
import Envelope from "../assets/envelope-letter.svg?react";
import BurgerMenu from "../assets/icons/burger-menu.svg?react";
import Lottie from "react-lottie-player";
import LottieAnimation from "../lottie-animation3.json";

export function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [animationDirection, setAnimationDirection] = useState(-1); // 1 for forward, -1 for reverse
  const [playAnimation, setPlayAnimation] = useState(false); // State to control animation play

  useEffect(() => {
    // Prevent the animation from playing automatically on component mount
    setPlayAnimation(true);
  }, []);

  function myFunction() {
    var x = document.getElementById("toggle");
    x.classList.toggle("hidden");
  }

  const toggleDarkMode = () => {
    const isDark = !document.documentElement.classList.toggle("dark");
    setIsDarkMode(isDark);
    // Toggle animation direction based on dark mode state
    setAnimationDirection(isDark ? -1 : 1);
    // Enable the animation to play when dark mode is toggled
    setPlayAnimation(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 px-8 py-8  bg-secondaryBG dark:bg-grey-100/80 w-full h-auto flex items-center justify-between color-transition backdrop-blur-xl">
        <button className="block md:hidden" onClick={myFunction}>
          <BurgerMenu className="dark:text-gray-300" />
        </button>
        <Logo className="h-8 w-auto dark:text-grey-0 color-transition " />
        <div className="flex space-x-8">
          <div className="hidden  md:flex">
            <a
              className="flex items-center text-grey-100 dark:text-grey-0 color-transition"
              href="#ContactForm"
            >
              <p className="font-roboto"> Newsletter</p>
              <Envelope alt="Envelope" className="h-8 w-auto ml-4" />
            </a>
          </div>
          <button onClick={toggleDarkMode}>
            <Lottie
              animationData={LottieAnimation}
              play={playAnimation} // Control play based on `playAnimation` state
              direction={animationDirection} // Control the direction based on dark mode toggle
              style={{ width: 50, height: 50 }} // Adjust size as needed
              loop={false}
              // Reset `playAnimation` to false after it plays to prevent replaying on component update
              onComplete={() => setPlayAnimation(false)}
            />
          </button>
        </div>
      </nav>
    </>
  );
}
