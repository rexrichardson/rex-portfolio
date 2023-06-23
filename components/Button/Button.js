import Styles from "./Button.module.css";

export default function Button({ size = "sm", text, color = "light" }) {
  let btnClass;
  let colorClass;

  switch (size) {
    case "xs":
      btnClass =
        "rounded px-2 py-1 text-xs font-semibold shadow-sm   hover:bg-gray-50";
      break;
    case "sm":
      btnClass =
        "rounded px-2 py-1 text-sm font-semibold shadow-sm  hover:bg-gray-50";
      break;
    case "md":
      btnClass =
        "rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm  hover:bg-gray-50";
      break;
    case "lg":
      btnClass =
        "rounded-md px-4 py-3 text-sm font-semibold shadow-sm  hover:bg-gray-50";
      break;
    case "xl":
      btnClass =
        "rounded-md px-5 py-4 text-md font-medium shadow-sm  hover:bg-gray-50";
      break;
    default:
      btnClass =
        "rounded px-2 py-1 text-sm font-semibold shadow-sm  hover:bg-gray-50";
      break;
  }

  switch (color) {
    case "light":
      colorClass = "bg-white text-gray-900";
      break;
    case "dark":
      colorClass = "bg-dark text-white"; // Replace with actual dark class
      break;
    case "brand":
      colorClass = `${Styles.brand} text-white ring-0`; // Replace with actual brand class
      break;
    default:
      colorClass = "bg-white text-gray-900";
      break;
  }

  return (
    <button
      type="button"
      className={`${btnClass} ${colorClass} w-fit  hover:scale-105	transition-all ease-in-out`}
    >
      {text}
    </button>
  );
}
