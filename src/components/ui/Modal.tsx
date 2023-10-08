import { ReactNode } from "react";
import { CheckCircle } from "@phosphor-icons/react";

import classes from "./Modal.module.css";

interface ModalProps {
	children?: ReactNode;
	onClick: () => void;
}

export const Modal = (props: ModalProps) => {
	return (
		<>
			<div className={classes.backdrop} onClick={props.onClick}></div>
			<div className={classes["modal-container"]}>
				{/* {props.children} */}
				<CheckCircle size={120} color="#4439c7" />
				<p>Obrigado por avaliar este produto!</p>
				<button onClick={props.onClick}>OK</button>
			</div>
		</>
	);
};
