import './App.css';
import { useState } from 'react'
import FormTodo from './components/FormTodo';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesomeLogoFull } from "@fortawesome/fontawesome-free";



const App = () => {

  const [task,SetTask] = useState('');
  const [list,SetList] = useState([]);
  
  //delete task
  const deleteTask = index => {
    const newList = [... list];
    newList.splice(index,1);
    SetList(newList);
    
  }
   return (
  <>
      <div className="container w-50" >
        <div className="row">
          <div className="col-md-12 bg-info">
            <h1 className="text-center">What do you want to do today?</h1>
          </div>
        </div>
        <div className="row" >
          <div className="col-md-12">
            <FormTodo list={list} task={task} setTask={SetTask} setList={SetList} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {
                !!list &&
                  list.length > 0 ?
                  list.map((task, index) => {
                    return (
                      <li key={index} href="/#" className="list-group-item list-group-item-action">
                        {task}
                        <i className="fas fa-trash float-right" onClick={() => deleteTask(index)}
                        ></i>
                      </li>
                    )
                  }) : (
                    <a className="list-group-item list-group-item-action">Lista Vacia</a>
                  )
              }
              <small className="text-sm-left">Numbers of tasks ({!!list ? list.length : 0})</small>
            </ul>
          </div>
        </div>
      </div>

    </>


  );
}

export default App;
