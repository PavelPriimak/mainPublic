import { useState } from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';

const data = require ("../src/mock.json");


function App() {
  const{tasks, setTasks} = useState(data)



  return (
      <div className='wrapper'>
        <Router>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer tasks={tasks} /> 
        </Router>    
      </div>
  );
}

export default App;
