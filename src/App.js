import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { TaskWindow } from './components/descriptionWindow/descriptionWindow';
import { KanbanBoard } from './components/main/main';

function App() {

  return (
    <div className='wrapper'>
            <Header />
              <Routes>
                <Route path='/' element={<KanbanBoard />} />
                <Route path='/task/:taskId' element={<TaskWindow />} />
              </Routes>  
            <Footer />     
    </div>
  )
}

export default App;
