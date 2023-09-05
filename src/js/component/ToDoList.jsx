import React, { useState } from "react";
import ListItem from "./ListItem";

//create your first component
const ToDoList = () => {

	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([])

	const enterInput = (event) => {
		if(event.key === "Enter" && inputValue) {
			setTasks([...tasks, inputValue])
			setInputValue("")
		};
	};

	return (
		<div className="container-fluid vh-100 bg-dark d-flex justify-content-center">
			<div className="todo-wrapper container bg-white m-auto p-5 w-50">

				<h1 class="todo-header text-center">To do List</h1>
				<input id="addToDo" type="text" placeholder="Add to do here" onKeyDown={enterInput} onChange={(event) => setInputValue(event.target.value)} value={inputValue} />

				<ul className="todo-list my-3">
					{tasks.map((element) => {
						return <ListItem text={element} />
					})}
				</ul>

				<div className="todo-footer">
					{tasks.length} items left.
				</div>

			</div>
		</div>
	);
};

export default ToDoList;
