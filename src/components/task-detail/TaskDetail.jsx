import { Link, useParams } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY } from '../../config'
import { formatDate } from '../../utils'
import css from './TaskDetail.css'
import Header from '../header/header'
import Logo from '../../svg/user-avatar.svg'

const TaskDetail = (props) => {
	const match = useParams()
	const {taskId} = match.params
	const {tasks, setTasks} = props
	const task = tasks.find(task => task.id === taskId)

	const handleChange = (e) => {
		const newStatus = e.target.value
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, status: newStatus}
			}
			return task
		})
		setTasks(updatedTasks)
	}

	const renderTaskDetails = () => {
		return (
			<>
				<Header />
				<Link to='/' className='css.homeLink'>Back to main menu</Link>
				<p className={css.createdAt}>Created at: {formatDate(task.created)}</p>
				<p>Description: {task.description || '(no description)'}</p>
				<p className={css.label}>Change status:</p>
				<select className={css.select} onChange={handleChange} value={task.status}>
					{Object.values(LIST_TYPES).map(list => {
						return <option key={list} value={list}>{LIST_COPY[list]}</option>
					})}
				</select>
			</>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className={css.emptyState}>
				<h2>Task with ID <em>{taskId}</em> was not found</h2>
				<img className={css.emptyStateIcon} src={Logo} alt='' />
			</div>
		)
	}

	return (
		<>
			<Link to='/' className={css.homeLink}>&#8592; Back</Link>
			<div className={css.wrapper}>
				{task ? renderTaskDetails() : renderEmptyState()}
			</div>
		</>
	)
}

export default TaskDetail