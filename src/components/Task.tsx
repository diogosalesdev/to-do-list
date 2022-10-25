import { CheckCircle, Trash } from 'phosphor-react';
import { ITask } from '../App';
import styles from './Task.module.css';

interface TaskProps {
	tasks: ITask;
	onComplete: (taskId: string) => void;
	onDelete: (taskId: string) => void;
}

export function Task({ tasks, onComplete, onDelete }: TaskProps) {
	return (
		<div className={styles.task}>
			<button className={styles.checkContainer} onClick={() => onComplete(tasks.id)}>
				{tasks.isCompleted ? <CheckCircle /> : <div />}
			</button>
			<p className={tasks.isCompleted ? styles.textCompleted : ''}>{tasks.title}</p>
			<button className={styles.deleteButton} onClick={() => onDelete(tasks.id)}>
				<Trash size={20} />
			</button>
		</div>
	);
}
