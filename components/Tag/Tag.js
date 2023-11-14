const Tag = ({ value }) => {
  return (
    <div
      className={`rounded-full bg-white text-black px-4 py-2 flex h-full font-light text-sm w-fit`}
    >
      {value}
    </div>
  );
};

export default Tag;
