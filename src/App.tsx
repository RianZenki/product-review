import { Button } from './components/ui/Button'
import { StarRating } from './components/StarRating';

import classes from "./App.module.css";

import smartwatch from './assets/watch.png'

export function App() {
	return (
		<div className={classes.container}>
			<div className={classes.card}>
        <header>
            <img src={smartwatch} alt="smartwatch amazfit" />
        </header>
        <main className={classes.content}>
          <div className={classes.title}>
            <h2>Avalie o produto</h2>
            <p>O que você achou do produto <strong>Smartwatch Amazfit Bip U Pro</strong>?</p>
          </div>

          <StarRating />

          <Button className={classes.confirm}>Confirmar</Button>
        </main>
      </div>
		</div>
	);
}
