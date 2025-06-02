import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./descriptionWindow.module.css";

export function TaskWindow() {
    const {taskId} = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("KanbanBoard"));
        if (savedTasks) {
            for(const column of Object.values(savedTasks)) {
                const foundTask = column.find((t) => t.id === taskId);
                if(foundTask) {
                    setTask(foundTask);
                    setDescription(foundTask.description || "");
                    break;
                }
            }
        }
    }, [taskId]);

    const saveDescription = () => {
        const savedTasks = JSON.parse(localStorage.getItem("KanbanBoard"));
        if(savedTasks) {
            const updatedTasks = {};
            for(const [columnKey, tasks] of Object.entries(savedTasks)) {
                updatedTasks[columnKey] = tasks.map((t) => t.id === taskId ? {...t, description} : t );
            }
        localStorage.setItem("KanbanBoard", JSON.stringify(updatedTasks));    
        }
    };

    const closeWindow = () => {
        saveDescription();
        navigate(`/`);
    };

    if(!task) return null;

    return (
        <div className={css.taskWindowWrapper}>
            <h2 className={css.taskWindow__name}>Задача: {task.text}</h2>
            <div className={css.taskWindow__form}>
                <label className={css.taskWindow__form_label}>Описание задачи:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Введите описание задачи..." className={css.taskWindow__form_textArea}/>
            </div>
            <button className={css.taskWindow__button} onClick={closeWindow}>Закрыть и вернуться</button>
        </div>
    );
}


