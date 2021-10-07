import styles from "./InteractiveImage.module.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const InteractiveImage = ({ imageUrl }) => {
	const [modalToggled, setModalToggled] = useState(false);

	const clicked = () => {
		modalToggled === false ? setModalToggled(true) : setModalToggled(false);
	};

	return (
		<div>
			<img
				className={styles.interactiveImage}
				src={imageUrl}
				onClick={() => clicked()}
			/>
			{modalToggled && (
				<div className={styles.modal}>
					<div className={styles.closeButton} onClick={() => clicked()}>
						<AiFillCloseCircle size={50} />
					</div>
					<div className={styles.modalImageContainer}>
						<img src={imageUrl} />
					</div>
				</div>
			)}
		</div>
	);
};

export default InteractiveImage;
