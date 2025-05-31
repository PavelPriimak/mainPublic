import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { LIST_TYPES } from './config';
import { useParams } from 'react-router-dom';


function App() {
  const { taskId} = useParams();
  const [tasks, setTasks] = useState(null);
  const [description, setDescription] = useState("");

  const activeTasks = tasks.filter((task) => task.status === 'inProgress').length;
  const finishedTasks = tasks.filter((task) => task.status === 'finished').length;

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("KanbanBoardTasks"));
    if(savedTasks) {
      for (const column of LIST_TYPES.values(savedTasks)) {
        const foundTask = column.find((t) => t.id === taskId);
        if(foundTask) {
          setTasks(foundTask);
          setDescription(foundTask.description || "");
          break;
        }
      }
    }
	}, [taskId]);

  const saveDescription = () => {
    const savedTasks = JSON.parse(localStorage.getItem("KanbanBoardTasks"));
    if(savedTasks) {
      const updatedTasks = {};
      for (const [columnKey, tasks] of LIST_TYPES.entries(savedTasks)) {
        updatedTasks[columnKey] = tasks.map((t) => 
        t.id === taskId ? { ...t, description } : t
      );
      }
    }
  }



  return (
      <div className='wrapper'>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} saveDescription={saveDescription} />
            <Footer tasks={tasks} activeTasks={activeTasks} finishedTasks={finishedTasks} />     
      </div>
  );
}

export default App;
