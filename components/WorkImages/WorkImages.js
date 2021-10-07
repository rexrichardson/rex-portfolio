import styles from "./WorkImages.module.css";
import { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import { render } from "react-dom";
import InteractiveImage from "../InteractiveImage/InteractiveImage";

const WorkImages = ({ images }) => {
	{
		return (
			<div>
				<div className={styles.images}>
					{images.map((image) => (
						<InteractiveImage key={key} imageUrl={image} />
					))}
				</div>
			</div>
		);
	}
};

export default WorkImages;
