import InteractiveImage from "../InteractiveImage/InteractiveImage";

const ArticleMainImage = ({ imageUrl }) => {
  return (
    <div className="relative h-56 sm:h-96 md:h-96 w-full">
      <InteractiveImage imageUrl={imageUrl} />
    </div>
  );
};

export default ArticleMainImage;
