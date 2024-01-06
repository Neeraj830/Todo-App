
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';


export default function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText) => {
    if(inputText !== "")
    setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo])

  }
  return (
    <center>
      <div className="main-container">
        <div className="center-container">
          <div className="header">
        <h1 className='app-heading'>TODO APP</h1>
        <hr/>
        <br/>
        <TodoList addList={addList}/>
      
       
        </div>
        {listTodo.map((listItem,i)=>{
          return (
            <TodoItems key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
        
        </div>
      </div>
      </center>
    
  )
}
