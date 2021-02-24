const FormTodo = ({list,task,setList,setTask}) =>{

return(
    <form onSubmit={(e) => {
        e.preventDefault();
        setList([...list, task]);
        setTask("");
    }}>
        <input
            type="text"
            className="form-control my-2"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Insert Task"
        />
    </form>
)

}
export default FormTodo;