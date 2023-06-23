import ScrollDown from "../ScrollDown/ScrollDown";
import Styles from "./Hero.module.css";

const Hero = () => (
  <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#009ffd10] h-screen">
    <div
      className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      aria-hidden="true"
    />
    <div className="mx-auto  px-6 lg:px-20 flex items-center h-full">
      <div>
        <div className={Styles.container}>
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl pb-4 text-center sm:leading-[1.25]		">
            Hi, I{"'"}m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-cyan-400 font-bold">
              Rex Richardson
            </span>
            . I{"'"}m a full-stack developer with a strong eye for design,
            specializing in React.js and React Native.
          </h1>
          <ScrollDown to="about" />
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
  </div>
);

export default Hero;
