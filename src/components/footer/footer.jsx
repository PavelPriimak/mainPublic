  import columns from "../../sourceOfListName";
  import css from "./footer.module.css";
  

	 
    function Footer(props) {
    
    const [tasks] = props
    let activeTasks;
	let finishedTasks;

	for (let column of columns) {
    activeTasks = tasks.filter(() => tasks[column.key] === "inProgress").length;
    finishedTasks = tasks.filter(() => tasks[column.key] ===  "done").length;

    }

	return (
		<footer className={css.footer}> 
			<div className={css.active_tasks}>Active tasks:{activeTasks}</div>
			<div className={css.finished_tasks}>Finished tasks:{finishedTasks}</div>
			<div className={css.author}>Kanban board by Pavel Priymak</div>
		</footer>
	)
}

export default Footer 

