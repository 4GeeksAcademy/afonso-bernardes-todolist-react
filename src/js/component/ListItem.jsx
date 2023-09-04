import React, { useState } from "react";

//create your first component
const ListItem = (props) => {
	return (
		<li>
			<span><i class="fa fa-trash"></i></span> {props.text}
		</li>
	)};

export default ListItem;