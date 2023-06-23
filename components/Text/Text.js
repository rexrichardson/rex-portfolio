import React from "react";

const Text = ({
  xs,
  s,
  m,
  l,
  xl,
  semib,
  bold,
  light,
  grey,
  brand,
  className,
  children,
}) => {
  const textSizeClass = xs
    ? "text-xs"
    : s
    ? "text-sm"
    : m
    ? "text-base"
    : l
    ? "text-lg"
    : xl
    ? "text-xl"
    : "text-base";

  const fontWeightClass = light
    ? "font-light"
    : semib
    ? "font-semibold"
    : bold
    ? "font-bold"
    : "font-medium";

  const textColorClass = grey ? "text-gray-500" : "";

  const backgroundClass = brand
    ? "bg-gradient-to-br from-blue-700 to-cyan-400 bg-clip-text text-transparent"
    : "";

  const mediaQueryTextSizeClass = xs
    ? "md:text-sm"
    : s
    ? "md:text-base"
    : m
    ? "md:text-lg"
    : l
    ? "md:text-xl"
    : xl
    ? "md:text-2xl"
    : "md:text-base";

  const classes = `${textSizeClass} ${fontWeightClass} ${textColorClass} ${backgroundClass} ${mediaQueryTextSizeClass} ${className} w-full`;

  return <div className={classes}>{children}</div>;
};

export default Text;
