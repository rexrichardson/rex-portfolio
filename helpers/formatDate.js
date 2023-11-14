export default function formatDate(dateString) {
  // Creating a Date object
  const date = new Date(dateString);

  // Converting to a locale date string
  const localeDateString = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return localeDateString;
}
