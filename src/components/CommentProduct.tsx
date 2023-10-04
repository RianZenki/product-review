import classes from "./Comment.module.css";

export const CommentProduct = () => {
	return (
		<>
			<div className={classes.title}>
				<h2>Deixe um comentário</h2>
				<p>Conte sobre o motivo da sua avaliação</p>
			</div>

			<textarea
            className={classes["comments-area"]}
				name=""
				id=""
				placeholder="Escreva aqui seu comentário"
				required
			></textarea>
		</>
	);
};
