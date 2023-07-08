import TaskItem from './Taskitem.jsx'; 
const tasks = [
    {
        id: 1,
        text: 'Consulta médica',
        day: '5 de Fev as 14:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Reunião na Escola',
        day: '6 de Fev as 13:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Compras no Supermercado',
        day: '7 de Fev as 8:30',
        reminder: false,
    },
];

const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem  key={task.id} task={task} />
            ))}
        </>
    );
}
export default Tasks
