import { FormEvent } from "react";
import { ArrowLeft } from "@phosphor-icons/react";

import { useMultistepForm } from "./hooks/useMultistepForm";
import { CommentProduct } from "./components/CommentProduct";
import { RateProduct } from "./components/RateProduct";
import { Button } from "./components/ui/Button";

import classes from "./App.module.css";

import smartwatch from "./assets/watch.png";

export function App() {
	const { step, back, next, isFirstIndex, isLastIndex } = useMultistepForm([
		<RateProduct />,
		<CommentProduct />,
	]);

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		next()
	};

	return (
		<div className={classes.container}>
			<div className={classes.card}>
				<header>
					{!isFirstIndex && (
						<ArrowLeft
							size={24}
							className={classes["arrow-back"]}
							onClick={back}
						/>
					)}
					<img src={smartwatch} alt="smartwatch amazfit" />
				</header>
				<form className={classes.content} onSubmit={handleSubmitForm}>
					{step}
					<Button className={classes["confirm-button"]}>
						{isLastIndex ? "Enviar" : "Confirmar"}
					</Button>
				</form>
			</div>
		</div>
	);
}
