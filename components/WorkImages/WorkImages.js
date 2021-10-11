import styles from "./WorkImages.module.css";
import { useEffect, useState } from "react";
import Gallery from "react-grid-gallery";
import { render } from "react-dom";
import InteractiveImage from "../InteractiveImage/InteractiveImage";

const WorkImages = ({ images, width }) => {
	{
		return (
			<div>
				<div
					className={width === "full" ? styles.fullImages : styles.halfImages}
				>
					{images.map((image, index) => (
						<InteractiveImage key={index} imageUrl={image} />
					))}
				</div>
			</div>
		);
	}
};

export default WorkImages;
