import style from './EmptyTasks.module.css';

import clipboard from '../assets/clipboard.svg';

export function EmptyTasks() {
    return (
        <div className={style.emptyContainer}>

            <img src={clipboard}/>

            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    );
}