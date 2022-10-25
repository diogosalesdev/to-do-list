import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import Logo from '../assets/Logo.svg';
import styles from './Header.module.css';

interface NewTasks {
	onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: NewTasks) {
	const [ title, setTitle ] = useState('');

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		onAddTask(title);
		setTitle('');
	}

	function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value);
	}

	return (
		<header className={styles.header}>
			<img src={Logo} alt="Logotipo do To Do List" />

			<form className={styles.newTaskForm} onSubmit={handleSubmit}>
				<input placeholder="Adicione uma nova tarefa" type="text" value={title} onChange={onChangeTitle} />
				<button>
					Criar
					<PlusCircle size={20} />
				</button>
			</form>
		</header>
	);
}
