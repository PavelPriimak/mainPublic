import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COLORS } from '../../config'
import css from './list.css'
import FormAddNewTask from '../forms/FormAddNewTask'



const List = props => {
	const {type, title, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleClick = () => {
		setFormVisible ( !isFormVisible )
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}


	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
				{tasks.map(task => {
					return (
						<Link to={`/tasks/${task.id}`}className={css.taskLink}>
						    <div key={task.id} className={css.task} style={{background: LIST_COLORS[type]}}>{task.title}</div>
						</Link>
					)
				})}
				{type === LIST_TYPES.BACKLOG && (
					<button className={css.addButton} onClick={handleClick}>+Add new Card</button>
				)}
				{type === LIST_TYPES.BACKLOG && isFormVisible && (
                    <FormAddNewTask formSubmit={formSubmit} />
				)}
		</div>
	)
}

export default List