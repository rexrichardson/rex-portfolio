const Tag = ({ theme, value }) => {
  const backgroundClass =
    theme === "black"
      ? "bg-white"
      : theme === "grey"
      ? "bg-gray-200"
      : "bg-black";
  const colorClass = theme === "black" ? "text-black" : "text-white";

  return (
    <div
      className={`rounded-full ${backgroundClass} ${colorClass} px-4 py-2 inline-flex mr-4 h-full font-light text-sm`}
    >
      {value}
    </div>
  );
};

export default Tag;
