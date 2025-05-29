import css from './footer.module.css'



function Footer() {
	
	return (
		<footer className={css.footer}>
			<div className={css.active_tasks}>Active tasks:</div>
			<div className={css.finished_tasks}>Finished tasks:</div>
			<div className={css.author}>Kanban board by Pavel Priymak</div>
		</footer>
	)
}

export default Footer