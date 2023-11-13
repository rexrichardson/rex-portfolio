import Image from "next/image";
import styles from "./InteractiveImage.module.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const InteractiveImage = ({ imageUrl, sizes }) => {
  const [modalToggled, setModalToggled] = useState(false);

  const clicked = () => {
    modalToggled === false ? setModalToggled(true) : setModalToggled(false);
  };

  return (
    <>
      <Image
        className="object-contain"
        fill
        src={imageUrl}
        onClick={() => clicked()}
        sizes={sizes}
      />
      {modalToggled && (
        <div className={styles.modal}>
          <div className={styles.closeButton} onClick={() => clicked()}>
            <AiFillCloseCircle size={50} />
          </div>
          <div className={styles.modalImageContainer}>
            <img className={styles.modalImage} src={imageUrl} />
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveImage;
