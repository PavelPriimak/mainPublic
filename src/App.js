import { useState, useEffect } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

const data = require ("../src/mock.json");

function App() {
  const [tasks, setTasks] = useState(data)

  useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])



  return (
      <div className='wrapper'>
        <BrowserRouter>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer tasks={tasks} /> 
        </BrowserRouter>    
      </div>
  );
}

export default App;
