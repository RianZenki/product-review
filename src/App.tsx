import { FormEvent, useState } from "react";
import { ArrowLeft } from "@phosphor-icons/react";

import { useMultistepForm } from "./hooks/useMultistepForm";
import { CommentProduct } from "./components/CommentProduct";
import { RateProduct } from "./components/RateProduct";
import { Button } from "./components/ui/Button";

import classes from "./App.module.css";

import smartwatch from "./assets/watch.png";

interface formData {
	ratingValue: string;
	comments: string;
}

const INITIAL_VALUES: formData = {
	ratingValue: "",
	comments: "",
};

export function App() {
	const [data, setData] = useState(INITIAL_VALUES);

	const updateValues = (data: Partial<formData>) => {
		setData((prevData) => ({ ...prevData, ...data }));
	};

	const { step, back, next, isFirstIndex, isLastIndex } = useMultistepForm([
		<RateProduct {...data} updateValues={updateValues} />,
		<CommentProduct {...data} updateValues={updateValues}  />,
	]);

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault();
		if(!isLastIndex) return next()

		alert(JSON.stringify(data))
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
					<Button
						className={classes["confirm-button"]}
						disabled={!data.ratingValue}
					>
						{isLastIndex ? "Enviar" : "Confirmar"}
					</Button>
				</form>
			</div>
		</div>
	);
}
