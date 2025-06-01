import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import columns from "../../sourceOfListName";
import css from "./main.module.css";

export function KanbanBoard() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("KanbanBoard");
        return savedTasks ? JSON.parse(savedTasks) :
        {
            backlog: [],
            ready: [],
            inprogress: [],
            done: []
        };
    });
    const [savingNewTask, setSavingNewTask] = useState ("");
    const navigate = useNavigate()

    useEffect (() => {
        const savedTasks = localStorage.getItem("KanbanBoard");
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect (() => {
        localStorage.setItem("KanbanBoard", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if(savingNewTask.trim() !== "") {
            const taskId = Date.now().toString();
            setTasks((prev) => ({
                ...prev,
                backlog: [...prev.backlog, {id: taskId, text: savingNewTask.trim() }],
            }));
            setSavingNewTask("");
        }
    };

    const moveTask = (taskId, fromList, toList) => {
        if(taskId) {
            setTasks((prev) => {
                const task = prev[fromList].find((t) => t.id === taskId);
                return {
                    ...prev,
                    [fromList]: prev[fromList].filter((t) => t.id !== taskId),
                    [toList]: [prev[toList], task],
                };
            });
        }
    };

    const openTaskWindow = (taskId) => {
        navigate(`/task/${taskId}`);
    }

    return (
        <div className={css.main_wrapper}>
            {columns.map((column, index) => (
               <div key={column.key} className={css.main_wrapper__list}>
                   <div className={css.main_wrapper__list_name}>{column.name}</div>
                   <div className={css.main_wrapper__list_addOrChooseTaskForm}>
                       <ul className={css.main_wrapper__list_addOrChooseTaskForm_outPutList}>
                           {tasks[column.key].map((task) => (
                           <li key={task.id} onClick={() => openTaskWindow(task.id)} className={css.main_wrapper__list_addOrChooseTaskForm_outPutList_taskLink}>{task.text}</li>
                           ))}    
                       </ul> 
                       {column.key === "backlog" ? (
                       <div className={css.main_wrapper__list_addOrChooseTaskForm_addTask}>
                           <input type="text" value={savingNewTask} onChange={(e) => setSavingNewTask(e.target.value)} placeholder="введите новую задачу" className={css.main_wrapper__list_addOrChooseTaskForm_addTask_input}/>
                           <button onClick={addTask} className={css.main_wrapper__list_addOrChooseTaskForm_addTask_button} disabled={savingNewTask.length === 0}>{savingNewTask.length === 0 ? "add Task" : "Submit Task"}</button>
                       </div>
                       ) : (
                       <div className={css.main_wrapper__list_addOrChooseTaskForm_chooseTask}>
                           <select onChange={(e) => moveTask(e.target.value, columns[index -1].key, column.key)} value="" className={css.main_wrapper__list_addOrChooseTaskForm_chooseTask_select}>
                               <option value="">Выберите задачу</option>
                               {tasks[columns[index - 1].key].map((task) => (
                                <option key={task.id} value={task.id}>{task.text}</option>
                               ))} 
                           </select> 
                       </div>
                       )}
                    </div>
               </div>     
            ))}     
        </div> 
        );
}
        
    
