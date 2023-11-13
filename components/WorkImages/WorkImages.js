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
              <InteractiveImage imageUrl={image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default WorkImages;
