export const Task = (props) => {
  return (
    <div style={{backgroundColor: props.completed ? "green" : "white"}}>
      <h2>{props.taskName}</h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.removeTask(props.id)}>X</button>
    </div>
  );
};