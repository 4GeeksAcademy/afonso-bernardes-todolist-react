import React, { useState } from "react";

const deleteItem = (event) => {
	event.target.parentNode.parentNode.remove();
};

//create your first component
const ListItem = (props) => {
	return (
		<li>
			<span><i className="fa fa-trash" onClick={deleteItem}></i></span> {props.text}
		</li>
	)};

export default ListItem;