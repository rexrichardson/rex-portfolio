import styles from "./WorkImages.module.css";
import InteractiveImage from "../InteractiveImage/InteractiveImage";

const WorkImages = ({ images, width }) => {
  {
    return (
      <div className="py-8">
        <div
          className={`${
            width === "full"
              ? styles.fullImages
              : width == "third"
              ? styles.thirdImages
              : styles.halfImages
          } `}
        >
          {images.map((image, index) => (
            <div className="relative h-[800px] w-auto object-fill" key={index}>
              <InteractiveImage
                imageUrl={image}
                sizes={
                  width == "full"
                    ? "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                    : width == "third"
                    ? "(max-width: 768px) 30vw, (max-width: 1200px) 25vw, 17vw"
                    : (sizes =
                        "(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 25vw")
                }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default WorkImages;
