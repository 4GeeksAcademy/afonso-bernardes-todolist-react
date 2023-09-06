import React, { useState } from "react";

//Create and return a list item.
const ListItem = (props) => {

	return (
		<li>
			<span><i className="fa fa-trash" onClick={props.deleteItem} data-remove-id={props.itemIndex}></i></span> {props.text}
		</li>
	)};

export default ListItem;