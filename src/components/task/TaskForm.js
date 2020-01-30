import React, { useContext, useRef } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"

export default props => {
    const { addTask } = useContext(TaskContext)
    const taskName = useRef("");
    const taskTask = useRef(0);
    const taskExCompDate = useRef(0);


    const constructNewTask = () => {
            addTask({
                name: taskName.current.value,
                task: taskTask.current.value,
                exCompDate: taskExCompDate.current.value,
            })
        }
    

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <div className="form-group">
                    <label htmlFor="taskName">Task name </label>
                    <input
                        type="text"
                        id="taskName"
                        ref={taskName}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Task name"
                    />
            </div>
            <div className="form-group">
                <label htmlFor="taskTask">Task </label>
                <input
                        type="text"
                        id="taskTask"
                        ref={taskTask}
                        className="form-control"
                        placeholder="Task"
                />
            </div>
            <div className="form-group">
                <label htmlFor="taskExCompDate">Expected Completion Date </label>
                <input
                        type="text"
                        id="taskExCompDate"
                        ref={taskExCompDate}
                        className="form-control"
                        placeholder="Exp. Completion Date"
                />
            </div>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault()
                        constructNewTask()
                    }
                }
                className="btn btn-primary">
                Save Task
            </button>
        </form>
    )
}