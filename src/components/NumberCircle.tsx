import style from './NumberCircle.module.css';

interface NumberCircleProps {
    firstNumber: number;
    lastNumber?: number;
}

export function NumberCircle({firstNumber, lastNumber}: NumberCircleProps) {
    return (
        <span className={style.circle}>
            {lastNumber ?
               firstNumber + ' de ' + lastNumber : firstNumber }
        </span>
    );
}