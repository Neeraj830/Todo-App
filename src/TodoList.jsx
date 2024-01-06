import { useState } from 'react';
import './App.css';
export default function TodoList(props) {
	const [inputText, setInputText]=useState("");
	const handleEnterPress = (e) => {
		if(e.keyCode === 13){
			// eslint-disable-next-line react/prop-types
			props.addList(inputText);
			setInputText("");
		}
	}
  return (
	<div className="input-container">
		<input type="text" 
		value={inputText}
		className="input-box-todo" 
		placeholder="Enter The Task" 
		onChange={e=>{setInputText(e.target.value)}}
		onKeyDown={handleEnterPress}/>
		<button className='btn-1'
		// eslint-disable-next-line react/prop-types
		onClick={()=>{props.addList(inputText);
		setInputText("");}}>Add</button>
	</div>
  )
}
