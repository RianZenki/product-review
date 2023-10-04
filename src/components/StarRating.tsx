import { useState } from "react";

import classes from "./StarRating.module.css";

export const StarRating = () => {
	const [rating, setRating] = useState<number | null>(null);

	const ratingValues = [4, 3, 2, 1, 0];

	const handleChangingValue = (ratingValue: number) => {
		setRating(ratingValue);
	};

	return (
		<div className={classes["rating-container"]}>
			<div className={classes["star-wrapper"]}>
				{ratingValues.map((ratingValue) => (
					<span
						onClick={() => handleChangingValue(ratingValue)}
						className={ratingValue === rating ? classes.selected : ""}
					>
						&#9733;
					</span>
				))}
			</div>
			<div className={classes.description}>
				<p>Ruim</p>
				<p>Ótimo</p>
			</div>
		</div>
	);
};
