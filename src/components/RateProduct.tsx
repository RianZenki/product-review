import { StarRating } from "./StarRating";

import classes from "./RateProduct.module.css";

export const RateProduct = () => {
	return (
		<>
			<div className={classes.title}>
				<h2>Avalie o produto</h2>
				<p>
					O que você achou do produto{" "}
					<strong>Smartwatch Amazfit Bip U Pro</strong>?
				</p>
			</div>

			<StarRating />
		</>
	);
};
