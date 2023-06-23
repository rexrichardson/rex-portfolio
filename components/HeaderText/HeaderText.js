import classNames from "classnames";

const HeaderText = ({
  xs,
  s,
  m,
  l,
  xl,
  light,
  semib,
  bold,
  center,
  brand,
  children,
}) => {
  const fontSizeClass = xs
    ? "text-lg pb-4"
    : s
    ? "text-xl pb-4"
    : m
    ? "text-2xl pb-4"
    : l
    ? "text-3xl pb-6"
    : xl
    ? "text-4xl pb-6"
    : "text-lg";
  const fontWeightClass = light
    ? "font-light"
    : semib
    ? "font-semibold"
    : bold
    ? "font-bold"
    : "font-medium";
  const textAlignClass = center ? "text-center" : "text-left";
  const brandClasses = brand
    ? "bg-clip-text text-transparent bg-gradient-to-br from-blue-700 to-cyan-400"
    : "";

  const classes = classNames(
    fontSizeClass,
    fontWeightClass,
    textAlignClass,
    brandClasses,
    {
      "md:text-xl": xs,
      "md:text-2xl": s,
      "md:text-3xl": m,
      "md:text-4xl": l,
      "md:text-5xl": xl,
    }
  );

  return <h2 className={classes}>{children}</h2>;
};

export default HeaderText;
