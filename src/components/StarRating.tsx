import { useState } from "react";

import classes from "./StarRating.module.css";

export const StarRating = () => {
	const [rating, setRating] = useState<number | null>(null);
	
		const handleChangingValue = (ratingValue: number) => {
			setRating(ratingValue);
		};

	const ratingValues = [4, 3, 2, 1, 0];

	return (
		<div className={classes["rating-container"]}>
			<div className={classes["star-wrapper"]}>
				{ratingValues.map((ratingValue) => (
					<>
						<input
							type="radio"
							name="rating-group"
							id={`value-${ratingValue}`}
							required
						/>
						<label htmlFor={`value-${ratingValue}`}>
							<span
								onClick={() => handleChangingValue(ratingValue)}
								key={ratingValue}
							>
								&#9733;
							</span>
						</label>
					</>
				))}
			</div>
			<div className={classes.description}>
				<p>Ruim</p>
				<p>Ótimo</p>
			</div>
		</div>
	);
};
