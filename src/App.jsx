import { useEffect, useState } from "react";
import "./App.css";
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
import { FaEdit } from "react-icons/fa";
function App() {

        
        const [allTodos,setTodos] = useState([]);
        const [newTitle,setNewTitle] = useState("");
        const [newDescription,setNewDescription] = useState("");

        const handleAddTodo = () =>{
        if(newTitle == "" && newDescription == ""){
        }
        else{
          let newTodoItem = {
            title : newTitle,
            description:newDescription
          }

          let updatedTodoArr = [...allTodos];
          updatedTodoArr.push(newTodoItem);
          setTodos(updatedTodoArr);

          localStorage.setItem('todolist',JSON.stringify(updatedTodoArr));

          setNewTitle("");
          setNewDescription("");
        }  
        }

        const handleDeleteTodo = index => {
          let reducedTodo = [...allTodos];
          reducedTodo.splice(index,1);
          localStorage.setItem('todolist',JSON.stringify(reducedTodo));
          setTodos(reducedTodo);
          
        }

        // const handleEditTodo = index =>{
        //   console.log(allTodos);
        //   console.log(index);
        //   const findTodo = allTodos.at(index);
        //   console.log(findTodo)
        //   setNewTitle(findTodo.title);
        //   setNewDescription(findTodo.description);
          
        // }

        useEffect(()=>{
          let savedTodo = JSON.parse(localStorage.getItem('todolist'));
          if(savedTodo){
            setTodos(savedTodo);
          }
        },[]);

        return (
          <>
           <div className="app">
            <h1>My Todo List</h1>
            <div className="todo_wrapper">
              <div className="todo_input">
                <div className="todo_input_item">
                  <label htmlFor="">Title</label>
                  <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} type="text" placeholder="What's the task Title ?"/>
                </div>
                <div className="todo_input_item">
                  <label htmlFor="">Description</label>
                  <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} type="text" placeholder="What's the task description ?"/>
                </div>
                <div className="todo_input_item">
                  <button onClick={handleAddTodo} type="button" className="primaryBtn">Add</button>
                </div>
              </div>

              <div className="btn_area">
                <button className= "secondaryBtn" >Todo</button>
                {/* <button className= "secondaryBtn" >Completed</button> */}
              </div>

              <div className="todo_list">
                {allTodos.map((item,index)=>{
                  return(
                    <div className="todo_list_item" key={index}>
                    <div className="task-top">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
  
                    <div className="icon-top">
                    {/* <FaEdit onClick={() => handleEditTodo(index)} className="icon"/> */}
                       <AiOutlineDelete onClick={() => handleDeleteTodo(index)} className="icon"/>       
                       <BsCheckLg className="check-icon"></BsCheckLg> 
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
           </div>
          </>
        );
}
export default App;