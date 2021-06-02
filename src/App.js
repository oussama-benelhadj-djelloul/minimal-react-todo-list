import './App.css';
import { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'

function App() {
  const [Todo, setTodo] = useState([])
  const taskInput = useRef()

  useEffect(() => {
    const LocalTasks = JSON.parse(localStorage.getItem('Collors'))
    if (LocalTasks) setTodo(LocalTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('Collors', JSON.stringify(Todo))
  }, [Todo])

  function toggleComplete(name) {
    const todo = [...Todo]
    const theCompletedTask = todo.find(todo => todo.name === name)
    console.log(theCompletedTask.completed)
    theCompletedTask.completed = !theCompletedTask.completed
    console.log(theCompletedTask.name)
    console.log(theCompletedTask.completed)
    setTodo(todo)
  }

  function handleAddTask(e) {
    const taskName = taskInput.current.value
    if (taskName === '') return
    setTodo(prevTask => {
      return [...prevTask, { name: taskName, completed: false }]
    })
    taskInput.current.value = null
  }

  return (
    <div className="App container p-5">
      <div className="row pb-5">
        <p class="mx-auto display-3">
          Weclome To Just Do It
      </p>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <TodoList key={Todo.name} toggleFunction={toggleComplete} doing={Todo} />
          <div class="input-group mb-3">
            <input type="text" ref={taskInput} class="form-control" placeholder="Cleaning..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" onClick={handleAddTask} type="button">Create Task</button>
            </div>
          </div>
        </div>
        <div className="col-md-2 text-left">
          <div className=" text-muted">
            Minimal To-Do Task app for your Browser.
          </div>
          <br />
          <div className="text-muted">
            Write Your Main taskes for Today and go to work.
          </div>
          <br />
          <div className="text-muted">
            Click on the task when ou finish it.
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
