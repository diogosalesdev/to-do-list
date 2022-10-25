import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import './global.css';

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
}

function App() {
	const [tasks, setTasks] = useState<ITask[]>([])

    function loadSavedTasks() {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (saved) {
            setTasks(JSON.parse(saved))
        }
    }

    useEffect(() => (
        loadSavedTasks()
    ), [])

    function setTasksAndSave(newTask: ITask[]){
        setTasks(newTask)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTask))
    }

    function addTask(taskTitle: string) {
        setTasksAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false
            }
        ])
    }

    function deleteTaskById(taskId: string) {
        const newTask = tasks.filter((task) => task.id !== taskId)
        setTasksAndSave(newTask)
    }

    function toggleTaskCompleteById(taskId: string) {
        const newTask = tasks.map((task) => {
            if(task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        })
        setTasksAndSave(newTask)
    }

    return (
        <>
            <Header onAddTask={addTask} />
            <TaskList
                tasks={tasks}
                onDelete={deleteTaskById}
                onComplete={toggleTaskCompleteById}
            />
        </>
    )
}

export default App;
