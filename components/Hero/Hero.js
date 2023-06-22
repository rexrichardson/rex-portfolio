import HeaderText from "../HeaderText/HeaderText";
import ScrollDown from "../ScrollDown/ScrollDown";
import Spacer from "../Spacer/Spacer";
import Styles from "./Hero.module.css";

const Hero = () => (
  <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 h-screen">
    <div
      className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
      aria-hidden="true"
    />
    <div className="mx-auto  px-6 lg:px-20 flex items-center h-full">
      <div>
        <div className={Styles.container}>
          <HeaderText l center light>
            Hi, I{"'"}m{" "}
            <HeaderText l bold brand center>
              Rex Richardson.&nbsp;
            </HeaderText>
            A full-stack developer with a passion for design, specialising in
            React.js and React Native.
          </HeaderText>
          <Spacer l />
          <ScrollDown to="about" />
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
  </div>
);

export default Hero;
