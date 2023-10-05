import classes from "./Comment.module.css";

interface UserData {
	comments: string;
}

type CommentProductProps = UserData & {
	updateValues: (data: UserData) => void;
};

export const CommentProduct = ({
	comments,
	updateValues,
}: CommentProductProps) => {
	return (
		<>
			<div className={classes.title}>
				<h2>Deixe um comentário</h2>
				<p>Conte sobre o motivo da sua avaliação</p>
			</div>

			<textarea
				className={classes["comments-area"]}
				placeholder="Escreva aqui seu comentário"
				value={comments}
				autoFocus
				onChange={(e) => updateValues({ comments: e.target.value })}
				required
			></textarea>
		</>
	);
};
