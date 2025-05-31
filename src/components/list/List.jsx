import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_COLORS, LIST_TYPES } from '../../config'
import css from './list.module.css'
import FormAddNewTask from '../forms/FormAddNewTask'



const List = props => {
	const {type, title, tasks, addNewTask, moveTask} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleClick = () => {
		setFormVisible ( !isFormVisible )
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

	}

{	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
				{tasks.map(task => {
					return (
						<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
						    <div className={css.task} style={{background: LIST_COLORS[type]}}>{task.title}</div>
						</Link>
					)
				})}
				{type === LIST_TYPES.BACKLOG ? (
					<button className={css.addButton} onClick={handleClick}>+Add new Card</button>
				): ( 
					<select className={css.addMoveTaskButton} onChange={(e) => moveTask(e.target.value, e.target.LIST_TYPES.key, LIST_TYPES.key)} value="">
						<option value="">Выбирете задачу</option>
						{LIST_TYPES.keys = newArray[LIST_TYPES.key, index]}
						tasks[LIST_TYPES.keys[index - 1].key].map((task) => (
							<option key={task.id} value={task.id}>{task.text}</option>
						))}
					</select>
				)}
				{type && isFormVisible && (
                    <FormAddNewTask formSubmit={formSubmit} />
				)}
		</div>
	)
}

export default List