import { useState, ReactElement } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurruntStepIndex] = useState(0);

	const next = () => {
		if (currentStepIndex < steps.length - 1) {
			setCurruntStepIndex((prevState) => prevState + 1);
		}
	};

	const back = () => {
		if (currentStepIndex > 0) {
			setCurruntStepIndex((prevState) => prevState - 1);
		}
	};

	return {
		step: steps[currentStepIndex],
		next,
		back,
		isFirstIndex: currentStepIndex === 0,
		isLastIndex: currentStepIndex === steps.length - 1,
	};
};
