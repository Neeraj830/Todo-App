/* eslint-disable react/prop-types */
function TodoItems(props) {

	return (
		<li className="list-item">
			{props.item}
			<button className="icons" onClick={()=>{
				props.deleteItem(props.index)
			}}>Delete</button>
		</li>
	);
}

export default TodoItems;