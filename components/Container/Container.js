import "aos/dist/aos.css";

const Container = ({
  theme,
  className,
  children,
  id,
  fullHeight,
  grey,
  aos,
}) => {
  const containerClasses = `w-full ${
    theme === "black"
      ? "bg-black text-white"
      : theme === "grey"
      ? "bg-gray-100"
      : "bg-white text-black"
  } ${className}`;

  const contentClasses = `pb-16 pt-8 px-4 sm:px-8 lg:px-16 xl:px-24  ${
    aos ? `aos-${aos}` : "fade-up"
  }`;

  return (
    <div
      id={id}
      className={containerClasses}
      style={fullHeight ? { minHeight: "100vh" } : {}}
    >
      <div
        data-aos-duration="500"
        data-aos-offset="300"
        className={contentClasses}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
