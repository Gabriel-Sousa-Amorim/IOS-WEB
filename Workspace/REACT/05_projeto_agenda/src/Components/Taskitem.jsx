import { FaTimes } from 'react-icons/fa';
const TaskItem = ({ task }) => {
    return (
        <div className="task">
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
        </div>
    );
};

export default TaskItem;