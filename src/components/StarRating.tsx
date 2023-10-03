import classes from "./StarRating.module.css";

export const StarRating = () => {
	return (
		<div className={classes["rating-container"]}>
			<div className={classes["star-wrapper"]}>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
				<span>&#9733;</span>
			</div>
			<div className={classes.description}>
				<p>Ruim</p>
				<p>Ótimo</p>
			</div>
		</div>
	);
};
