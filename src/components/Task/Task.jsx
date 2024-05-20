import css from './Task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/actions';

export const Task = ({ task }) => {

    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    }
    const handleToggle = () => {
        dispatch(toggleCompleted(task.id));
    }

    return (
        <div className={css.wrapper}>
            <input
                type="checkbox"
                onChange={handleToggle}
                className={css.checkbox}
                checked={task.completed}
            />
            <p className={css.text}>{task.text}</p>
            <button className={css.btn} onClick={handleDelete}>Delete</button>
        </div>
    );
};
