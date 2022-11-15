import style from './Tasks.module.css';

import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';

export interface TasksProps {
    id: number;
    taskText: string;
    isTaskChecked: boolean;
    onPressTrashButton: (recievedId: number) => void;
    onChangeTaskCheck: (recievedId: number) => void;
}

export function Tasks({id, taskText, isTaskChecked, onPressTrashButton, onChangeTaskCheck}: TasksProps) {

    return(
        <div className={style.taskContainer}>
            <div 
                className={isTaskChecked ? style.checked : style.notChecked}
                onClick={() => onChangeTaskCheck(id)}    
            >
                <Check />
            </div>

            <span 
                className={isTaskChecked ? style.taskTextWithLine : style.taskText}
                onClick={() => onChangeTaskCheck(id)} 
            >
                { taskText }
            </span>

            <button onClick={() => onPressTrashButton(id)}>
                <Trash size={16}/>
            </button>
        </div>
    );

}