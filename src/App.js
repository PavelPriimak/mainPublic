import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';


const data = require ("../src/mock.json");

function App() {
  const [tasks, setTasks] = useState(data)

  const activeTasks = tasks.filter((task) => task.status === 'inProgress').length;
  const finishedTasks = tasks.filter((task) => task.status === 'finished').length;

  useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])



  return (
      <div className='wrapper'>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer tasks={tasks} activeTasks={activeTasks} finishedTasks={finishedTasks} />     
      </div>
  );
}

export default App;
