import { StarRating } from "./StarRating";

import classes from "./RateProduct.module.css";

interface UserData {
	ratingValue: string;
}

type RateProductProps = UserData &  {
	updateValues: (data: UserData) => void
}

export const RateProduct = (props: RateProductProps) => {
	return (
		<>
			<div className={classes.title}>
				<h2>Avalie o produto</h2>
				<p>
					O que você achou do produto{" "}
					<strong>Smartwatch Amazfit Bip U Pro</strong>?
				</p>
			</div>

			<StarRating {...props} />
		</>
	);
};
