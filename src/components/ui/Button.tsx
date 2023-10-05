import { ArrowRight } from "@phosphor-icons/react";

import classes from "./Button.module.css";

interface ButtonProps {
	children: string;
	className?: string;
	disabled: boolean
}

export const Button = (props: ButtonProps) => {
	return (
		<button
			className={`${classes.button} ${props.className}`}
			disabled={props.disabled}
		>
			{props.children}
			<ArrowRight size={24} />
		</button>
	);
};
