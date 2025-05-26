import css from './main.css'
import Board from '../board/board'
import { BrowserRouter, Route} from "react-router-dom"
import TaskDetail from '../task-detail/TaskDetail'

const Main = (props) => {
	return (
		<main className={css.main}>
			<BrowserRouter>
				<Route exact path={'/'}>
					<Board {...props} />
				</Route>
				<Route path={'/tasks/:taskId'}>
					<TaskDetail {...props} />
				</Route>
			</BrowserRouter>
		</main>
	)
}

export default Main