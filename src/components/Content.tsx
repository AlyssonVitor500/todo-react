import style from './Content.module.css';

import { PlusCircle } from 'phosphor-react';
import { NumberCircle } from './NumberCircle';
import { EmptyTasks } from './EmptyTasks';
import { Tasks } from './Tasks';
import { useState } from 'react';

export function Content() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            taskText: 'Tarefa default',
            isTaskChecked: false
        }
    ]);

    const [newTaskText, setNewTaskText] = useState('');

    function handleDeleteTask(taskId: number) {
        setTasks(tasks.filter(item => item.id != taskId));
    }

    function handleCreateNewTask() {
        const newTask = {
            id: getLastIdPlustOne(),
            isTaskChecked: false,
            taskText: newTaskText
        };
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function getLastIdPlustOne(): number {
        if (tasks.length === 0) {
            return 0;
        }

        return tasks[tasks.length - 1].id + 1;
    }

    function handleTaskCheck(taskId: number) {
        const taskToChange = tasks.filter(item => item.id === taskId)[0];
        const index = tasks.findIndex(item => item.id === taskId);
        const newTaskToChange = {
            id: taskToChange.id,
            isTaskChecked: !taskToChange.isTaskChecked,
            taskText: taskToChange.taskText
        }
        const taskWithOutTaskToChange = tasks.filter(item => item.id !== taskId);
        taskWithOutTaskToChange.splice(index, 0, newTaskToChange)
        setTasks(taskWithOutTaskToChange);
    }   

    function getNumberOfTasksFinished(): number {
        return tasks.filter(item => item.isTaskChecked).length;
    }

    return (
        <section className={style.containerMain}>
            <div className={style.inputGroup}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={(e) => {setNewTaskText(e.target.value)}}
                />
                <button disabled={!newTaskText} onClick={handleCreateNewTask}>
                    Criar <PlusCircle size={16}/>
                </button>
            </div>

            <section className={style.contentHeaderMain}>
                <div className={style.createdTasks}>
                    Tarefas criadas <NumberCircle firstNumber={tasks.length} />
                </div>
                <div className={style.finishedTasks}>
                    Concluídas <NumberCircle firstNumber={getNumberOfTasksFinished()} lastNumber={tasks.length} />
                </div>
            </section>

            <section className={style.tasksContainer}>
                {   
                    tasks.length !== 0 ?
                        tasks.map(item => {
                            return (
                                <Tasks 
                                    key={item.id}
                                    taskText={item.taskText} 
                                    isTaskChecked={item.isTaskChecked}
                                    id={item.id}
                                    onPressTrashButton={handleDeleteTask}
                                    onChangeTaskCheck={handleTaskCheck}
                                />
                            );
                        })
                    : <EmptyTasks />
                }
                
            </section>
            
        </section>
    );
}