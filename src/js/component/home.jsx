import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid vh-100 bg-dark d-flex justify-content-center">
			<div className="todo-list container bg-white m-auto p-5 w-50">

				<h1 class="todo-header text-center">To do List</h1>
				<input id="addToDo" type="text" placeholder="Add to do here" />
				<ul className="my-3">
					<li>
						<span><i class="fa fa-trash"></i></span> Eat
					</li>
					<li>
						<span><i class="fa fa-trash"></i></span> Drink
					</li>
					<li>
						<span><i class="fa fa-trash"></i></span> Sleep
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
