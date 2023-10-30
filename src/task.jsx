import { useRef , useState } from 'react'


function task(props){

    // let  taskDone = false;
    let[taskDone,setTaskdone] = useState(false);
    const taskRef = useRef(null)

    function handleChange(event){
        const checked=event.target.checked;
        // taskDone =checked;
        console.log(taskDone);

        setTaskdone(checked);
    }
    function handleDelete(event){
        const li =taskRef.current;
        li.remove();
        // const btn=event.target;
        // btn.parentElement.remove();
    }
    function getClasses(){
        let classes = [ "task" ];
        if(props.important)classes.push("important");
        if(taskDone)classes.push("done");
        // [ "task","important","done"];
        // "task important done"
        console.log(classes);
        return classes.join(" ");
    }
    return(
        <li ref={taskRef} className={getClasses()}> 
        <h2> {props.taskname}</h2>
        <input type="checkbox" onChange={handleChange}/> 
        <button onClick={handleDelete}>Delete</button>
        </li>
    );
}
export default task;