import InteractiveImage from "../InteractiveImage/InteractiveImage";

const ArticleMainImage = ({ imageUrl }) => {
  return (
    <div className="relative h-56 sm:h-96 md:h-96 w-full">
      <InteractiveImage
        imageUrl={imageUrl}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
      />
    </div>
  );
};

export default ArticleMainImage;
