import css from './main.css';
import Board from '../board/board';
import TaskDetail from '../task-detail/TaskDetail';
import { Routes, Route } from 'react-router-dom';

const Main = (props) => {
  return (
    <main className={css.main}>
      <Routes>
        <Route path='/' element={<Board {...props} />} />
        <Route path='/tasks/:taskId' element={<TaskDetail {...props} />} />
      </Routes>
    </main>
  );
};

export default Main;