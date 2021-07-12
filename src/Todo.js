import {
	Button,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo.css";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		top: "300px",
		left: "500px",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

function Todo({ todo }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");

	const handleOpen = () => {
		setOpen(true);
	};

	const updateTodo = () => {
		//update TODO
		db.collection("todos").doc(todo.id).set(
			{
				todo: input,
			},
			{ merge: true }
		);
		setOpen(false);
		// setInput(todo.todo);
	};

	return (
		<>
			<Modal open={open} onClose={(e) => setOpen(false)}>
				<div className={classes.paper}>
					<h1>This is a MODAL</h1>
					<input
						placeholder={todo.todo}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
					<Button variant="outlined" color="primary" onClick={updateTodo}>
						UPDATE TODO
					</Button>
				</div>
			</Modal>
			<List>
				<ListItem>
					<ListItemText className="list" secondary="Task" primary={todo.todo} />
				</ListItem>
				<button onClick={(e) => setOpen(true)}>Edit</button>
				<IconButton aria-label="delete" color="secondary">
					<DeleteForeverIcon
						onClick={(e) => db.collection("todos").doc(todo.id).delete()}
						disabled={!todo.input}
					/>
				</IconButton>
			</List>
		</>
	);
}

export default Todo;
