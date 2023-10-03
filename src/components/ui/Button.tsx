import { ArrowRight } from "@phosphor-icons/react";

import classes from "./Button.module.css";

interface ButtonProps {
	children: string;
	className?: string;
}

export const Button = (props: ButtonProps) => {
	return (
		<button
			type="button"
			className={`${classes.button} ${props.className}`}
		>
			{props.children}
			<ArrowRight size={24} />
		</button>
	);
};
