import { ClipboardText } from 'phosphor-react';
import { ITask } from '../App';
import { Task } from './Task';
import styles from './TaskList.module.css';

interface TaskListprops {
	tasks: ITask[];
	onComplete: (taskId: string) => void;
	onDelete: (taskId: string) => void;
}

export function TaskList({ tasks, onComplete, onDelete }: TaskListprops) {
	const taskQuantity = tasks.length;
	const completedTasks = tasks.filter((task) => task.isCompleted).length;

	return (
		<section className={styles.tasks}>
			<header className={styles.header}>
				<div>
					<p>Tarefas criadas</p>
					<span>{taskQuantity}</span>
				</div>

				<div>
					<p className={styles.textPurple}>Concluídas</p>
					<span>
						{completedTasks} de {taskQuantity}
					</span>
				</div>
			</header>

			<div className={styles.list}>
				{tasks.map((task) => <Task key={task.id} tasks={task} onComplete={onComplete} onDelete={onDelete} />)}

				{tasks.length <= 0 && (
					<section className={styles.empty}>
						<ClipboardText size={50} />
						<div>
							<p>Você ainda não possui tarefas registradas</p>
							<span>Crie e organize suas tarefas e itens a fazer</span>
						</div>
					</section>
				)}
			</div>
		</section>
	);
}
