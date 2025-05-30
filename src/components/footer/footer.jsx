import css from './footer.module.css'



function Footer(props) {
	const {activeTasks, finishedTasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.active_tasks}>Active tasks:{activeTasks}</div>
			<div className={css.finished_tasks}>Finished tasks:{finishedTasks}</div>
			<div className={css.author}>Kanban board by Pavel Priymak</div>
		</footer>
	)
}

export default Footer