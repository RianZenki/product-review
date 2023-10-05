import classes from "./StarRating.module.css";

interface UserData {
	ratingValue: string;
}

type StarRatingProps = UserData & {
	updateValues: (data: UserData) => void;
};

export const StarRating = ({ ratingValue, updateValues }: StarRatingProps) => {
	const ratingValues = ["5", "4", "3", "2", "1"];

	return (
		<div className={classes["rating-container"]}>
			<div className={classes["star-wrapper"]}>
				{ratingValues.map((rating) => (
					<>
						<input
							type="radio"
							name="rating-group"
							id={`value-${rating}`}
							defaultChecked={rating === ratingValue}
							required
						/>
						<label htmlFor={`value-${rating}`}>
							<span
								onClick={() => updateValues({ ratingValue: rating })}
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
